const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('MONGO_URI value:', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('DB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
console.log('MONGO_URI value:', process.env.MONGO_URI);
