const ErrorResponse = require("../utils/errorResponse");
const httpStatus = require("../utils/httpStatusCode");

const errorHandler = (err, req, res, next) => {
    console.log(err);

    let error = { ...err };

    error.message = err.message;

    if (err.name === "CastError") {
        const message = "Resource not found";
        error = new ErrorResponse(message, httpStatus.NOT_FOUND);
    }

    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, httpStatus.BAD_REQUEST);
    }

    if (err.name === "ValidationError") {
        const message = Object.values(err.errors)
            .map((error) => error.message)
            .join(", ");
        error = new ErrorResponse(message, httpStatus.BAD_REQUEST);
    }

    // add more check...

    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || "Internal server error"
    });
};

module.exports = errorHandler;