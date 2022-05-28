const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;
const UserModel = require('../models/user.model');
const httpStatusCodes = require('../utils/httpStatusCode');
const httpStatus = require('../utils/httpStatusCode');

const authenticationVerifier = async (req, res, next) => {
    try {
        const tokenWithBearer = req.headers.authorization;
        console.log(tokenWithBearer)
        // const token = tokenWithBearer.split(' ')[1]; => TokenArray = tokenWithBearer.split(' '); + token = TokenArray[1];
        const token = tokenWithBearer.split(' ')[1];
        console.log(token)
        const decoded = jwt.verify(token, JWT_KEY);

        const userId = decoded.userId;
        const user = await UserModel.findOne(userId);

        if (!user) {
            res.status(httpStatus.UNAUTHORIZED).json({ message: 'Unauthorised access' })
            return;
        }

        req.user = user;
        next();
    } catch (error) {
        console.log('error =', error);
        res.status(httpStatus.UNAUTHORIZED).json({ message: 'Token is invalid' });
    }
}

module.exports = authenticationVerifier;
