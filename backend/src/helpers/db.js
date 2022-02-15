import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
let isConnected;
const DB = process.env.DB || 'DB:mongodb://localhost:27017/bank';
console.log(DB);
const connectToDatabase = () => {
  if (isConnected) {
    // console.log('=> using existing database connection');
    return Promise.resolve();
  }

  // console.log('=> using new database connection');
  // console.log('process.env.DB: ', process.env.DB);
  return mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => {
      isConnected = db.connections[0].readyState;
      // console.log('isConnected ', isConnected);
    })
    .catch((err) => console.log('mongoose connection error:', err));
};

// eslint-disable-next-line import/prefer-default-export
export { connectToDatabase };
