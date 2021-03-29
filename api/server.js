const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 🤯 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('The DB has been successfully connected! 😀'));

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port} 📻...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLE REJECTION! 🤯 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully. 😴');
  server.close(() => {
    console.log('Process terminated!');
  })
})
