const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const { AppError } = require('./utils');
const { globalErrorHandler } = require('./controllers');

const app = express();

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

// Errors
// -- unknown routes
app.all('*', (req, res, next) => {
  next(new AppError(`Could not find ${req.originalUrl} on this server!`, 404));
});

// -- global errors
app.use(globalErrorHandler);

module.exports = app;
