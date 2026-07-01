// Custom middleware to catch any server errors and send a clean JSON response
const errorHandler = (err, req, res, next) => {
    // Log the error to the terminal so I can debug it locally
    console.log("Server Error:", err.stack);

    // Send a 500 Internal Server Error back to the frontend
    res.status(500).json({
        success: false,
        message: err.message || "Something went wrong on the server"
    });
};

module.exports = errorHandler;