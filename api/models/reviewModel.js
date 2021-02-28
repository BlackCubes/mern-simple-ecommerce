const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'A review cannot be empty!'],
    minlength: [20, 'A review must have a minimum of 20 characters!'],
    maxlength: [280, 'A review must be less than or equal to 280 characters!'],
  },
  rating: {
    type: Number,
    min: [1, 'A minimum rating of 1!'],
    max: [5, 'A maximum rating of 5!'],
  },
  userfullname: {
    type: String,
    required: [true, 'Please enter your name!'],
    minlength: [2, 'Please enter your name with a minimum of 2 characters!'],
    maxlength: [
      70,
      'Please enter your name less than or equal to 70 characteers!',
    ],
  },
  productId: {
    type: Number,
    required: [true, 'A review must belong to a product!'],
    min: [1, 'There needs to be at least 1 product!'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// STATIC METHODS
// -- find query in DB
reviewSchema.statics.valueExists = function (query) {
  return this.findOne(query).then((res) => res);
};

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
