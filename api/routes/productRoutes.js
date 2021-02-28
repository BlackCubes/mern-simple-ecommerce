const express = require('express');

const reviewRouter = require('./reviewRoutes');

const router = express.Router({ mergeParams: true });

router.use('/:productId/reviews', reviewRouter);

module.exports = router;
