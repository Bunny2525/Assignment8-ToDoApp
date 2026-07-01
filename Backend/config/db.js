const mongoose = require('mongoose');

// Connecting to my MongoDB Atlas database using the URI from the .env file
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Database connection failed:", error.message);
        // Stop the server completely if the database doesn't connect
        process.exit(1); 
    }
};

module.exports = connectDB;