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
  ratingsAverage: {
    type: Number,
    default: 3.5,
    min: [1, 'A minimum average rating of 1.0!'],
    max: [5, 'A maximum average rating of 5.0!'],
    set: (val) => Math.round(val * 10) / 10,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
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
// -- calculate the average review rating
reviewSchema.statics.calcAverageRatings = async function (productId) {
  const stats = await this.aggregate([
    {
      $match: { productId },
    },
    {
      $group: {
        _productId: '$productId',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);

  if (stats.length > 0) {
    await this.updateMany(
      { productId },
      {
        ratingsQuantity: stats[0].nRating,
        ratingsAverage: stats[0].avgRating,
      }
    );
  } else {
    await this.updateMany(
      { productId },
      {
        ratingsQuantity: 0,
        ratingsAverage: 3.5,
      }
    );
  }
};

// -- -- then, middleware for current review
reviewSchema.post('save', function () {
  this.constructor.calcAverageRatings(this.productId);
});

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne();
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageRatings(this.r.productId);
});

// -- find query in DB
reviewSchema.statics.valueExists = function (query) {
  return this.findOne(query).then((res) => res);
};

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
