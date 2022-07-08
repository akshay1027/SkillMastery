const bcrypt = require('bcrypt');

const UserModel = require('../models/user.model');
const getToken = require('../utils/getToken');
const ErrorResponse = require('../utils/errorResponse');
const httpStatus = require('../utils/httpStatusCode');

const createNewUser = async (userData) => {
    try {
        const { password, email, userName, name } = userData;

        if (!email || !name || !password || !userName) {
            throw new ErrorResponse(httpStatus.BAD_REQUEST, "One or more fields missing. All fields are required!");
        }

        const oneAlphaNumuricRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        // /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/

        if (password.length <= 5) {
            throw new ErrorResponse(httpStatus.FORBIDDEN, "Password length has to be more than 7 characters!");
        }

        if (oneAlphaNumuricRegex.test(password)) {
            throw new ErrorResponse(httpStatus.FORBIDDEN, "Password must contain atleast 1 special character");
        }

        const isUserExistingEmail = await UserModel.findOne({ email: email }).lean();
        const isUserExistingUserName = await UserModel.findOne({ userName: userName }).lean();

        if (isUserExistingEmail || isUserExistingUserName) {
            // console.log(user);
            throw new ErrorResponse(httpStatus.CONFLICT, "Account already exists for this email and/or username");
        }
        const salt = await bcrypt.genSalt(5);
        userData.password = await bcrypt.hash(password, salt);

        const newUser = new UserModel(userData);
        await newUser.save();

        const token = getToken(newUser._id);

        return {
            token
        };

    } catch (error) {
        console.log(error)
        throw new ErrorResponse(httpStatus.UNAUTHORIZED, error);
    }
};

const signInUser = async (userData) => {
    try {
        const { email, password } = userData;

        if (!email || !password) {
            throw new ErrorResponse(httpStatus.FORBIDDEN, "One or more fields missing. All fields are required!");
        }

        const user = await UserModel.findOne({ email }).lean();
        if (!user) {
            throw new ErrorResponse(httpStatus.FORBIDDEN, 'Email or password is incorrect!');
        }

        const isPasswordValid = await bcrypt.compare(password, user?.password);
        if (!isPasswordValid) {
            throw new ErrorResponse(httpStatus.FORBIDDEN, 'Password is incorrect!');
        }

        const token = getToken(user._id);

        return {
            username: user.userName,
            token
        };
    } catch (error) {
        throw new ErrorResponse(httpStatus.UNAUTHORIZED, error);
    }
};

const changePassword = async (data, user) => {
    try {
        const { currentPassword, newPassword } = data;

        const isPasswordValid = await bcrypt.compare(currentPassword, user?.password);
        if (!isPasswordValid) {
            throw new ErrorResponse(httpStatus.FORBIDDEN, 'Current password is incorrect!');
        }

        const userData = await UserModel.findById({ id: user.id })

        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(newPassword, salt);
        userData.save();

        return {
            status: 'success',
            message: 'Account password has been updated successfully'
        }

    } catch (error) {
        throw new ErrorResponse(500, 'Password not changed');
    }
}

module.exports = {
    createNewUser,
    signInUser,
    changePassword
}