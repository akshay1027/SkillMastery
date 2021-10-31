const routeNotFoundHandler = (req, res, next) => {
    res.status(404).json({ message: 'Route is not found on server, please check the API endpoint' });
    next();
}

module.exports = routeNotFoundHandler;