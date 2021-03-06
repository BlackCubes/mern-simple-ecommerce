const Models = require('./../models');
const { AppError, catchAsync } = require('./../utils');

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const query = req.body;
    // if (req.params.productId) query.productId = req.params.productId;

    const doc = await Models[Model].create(query);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // For Nested Routes
    const filter = {};
    if (req.params.productId) filter.productId = req.params.productId;

    const doc = await Models[Model].find(filter);

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Models[Model].findById(req.params.id);

    if (!doc)
      return next(new AppError(`There is no ${Model} with that ID! 😰`, 404));

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Models[Model].findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc)
      return next(new AppError(`There is no ${Model} with that ID! 😰`, 404));

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Models[Model].findByIdAndDelete(req.params.id);

    if (!doc)
      return next(new AppError(`There is no ${Model} with that ID! 😰`, 404));

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
