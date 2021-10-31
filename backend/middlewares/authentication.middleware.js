const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;
const UserModel = require('../models/user.model');

const authenticationVerifier = async (req, res, next) => {
    try {
        const tokenWithBearer = req.headers.authorization;
        console.log(tokenWithBearer)
        const token = tokenWithBearer.split(' ')[1];
        console.log(token)
        const decoded = jwt.verify(token, JWT_KEY);

        const userId = decoded.userId;
        const user = await UserModel.findOne(userId);

        if (!user) {
            res.status(401).json({ message: 'Unauthorised access' })
            return;
        }

        req.user = user;
        next();
    } catch (error) {
        console.log('error =', error);
        res.status(401).json({ message: 'Token is invalid' });
    }
}

module.exports = authenticationVerifier;
