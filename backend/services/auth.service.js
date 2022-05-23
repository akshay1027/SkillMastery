const bcrypt = require('bcrypt');

const UserModel = require('../models/user.model');
const getToken = require('../utils/getToken');
const ErrorResponse = require('../utils/errorResponse');
const httpStatus = require('../utils/httpStatusCode');

const createNewUser = async (userData) => {
    try {
        const user = await UserModel.findOne({ email: userData.email, userName: userData.userName });
        if (user) {
            throw new ErrorResponse(httpStatus.CONFLICT, 'Account already exists for this email/username');
        }

        const salt = await bcrypt.genSalt(10);
        userData.password = bcrypt.hash(userData.password, salt);

        const NewUser = new UserModel(userData);
        await NewUser.save();

        const token = getToken(NewUser._id);

        return {
            token
        };
    } catch (error) {
        throw new ErrorResponse(httpStatus.UNAUTHORIZED, 'Account creation failed')
    }
};

const signInUser = async (userData) => {
    try {
        const email = userData.email;
        const user = await UserModel.findOne({ email });
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!user || !isPasswordValid) {
            throw new ErrorResponse(httpStatus.FORBIDDEN, 'Email or password is incorrect!');
        }

        const token = getToken(user._id);

        return {
            token
        };
    } catch (error) {
        throw new ErrorResponse(httpStatus.UNAUTHORIZED, 'Account creation failed')
    }
};
