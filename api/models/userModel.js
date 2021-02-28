const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name!'],
    minlength: [2, 'Please enter a name with a minimum of 2 characters!'],
    maxlength: [70, 'Please enter a name less than or equal to 70 characters!'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email!'],
  },
  role: {
    type: String,
    enum: ['admin'],
    default: 'admin',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    minlength: [8, 'Please enter a password with a minimum of 8 characters!'],
    maxlength: [
      60,
      'Please enter a password less than or equal to 60 characters!',
    ],
    select: false,
  },
  password_confirmation: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'The passwords are not the same!',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

// DOCUMENT MIDDLEWARES
// -- salt password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.password_confirmation = undefined;
  next();
});

// -- update the date if password is changed
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// INSTANCE METHODS
// -- check for correct password
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// -- check for changed password after token issued
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

// -- create user password reset
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// STATIC METHODS
// -- find query in DB
userSchema.statics.valueExists = function (query) {
  return this.findOne(query).then((res) => res);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
