const httpStatus = require('../utils/httpStatusCode')

const routeNotFoundHandler = (req, res, next) => {
    res.status(httpStatus.NOT_FOUND).json({ message: 'Route is not found on server, please check the API endpoint' });
    next();
}

module.exports = routeNotFoundHandler;