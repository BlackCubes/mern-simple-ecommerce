const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const useragent = require('express-useragent');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const { AppError } = require('./utils');
const { globalErrorHandler } = require('./controllers');
const { productRouter, reviewRouter, userRouter } = require('./routes');

const app = express();

// Proxy
app.enable('trust proxy');

// Enable Template Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Implement CORS
app.use(cors());
app.options('*', cors());

// GLOBAL MIDDLEWARES
// Helmet -- set security HTTP headers
app.use(helmet());

// Morgan -- development logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Express-Rate-Limit --  limit requests from some API
const limiter = rateLimit({
  max: 20,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP 😮. Please try again in an hour.',
});
app.use('/api', limiter);

// Expose User-Agent
app.use(useragent.express());

// Body Parser -- reading data from the body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ limit: '10kb', extended: true }));
app.use(cookieParser());

// Data Sanitization
// --- against NoSQL query injection
app.use(mongoSanitize());

// -- against XSS
app.use(xss());

// HPP -- prevent parameter pollution
// nothing yet

// Routes
app.use('/api/v1/products', productRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/users', userRouter);

// Errors
// -- unknown routes
app.all('*', (req, res, next) => {
  next(new AppError(`Could not find ${req.originalUrl} on this server!`, 404));
});

// -- global errors
app.use(globalErrorHandler);

module.exports = app;
