const asyncHandler = require("../middlewares/asyncHandler.middleware");

const authService = require('../services/auth.service')

// signup
const createNewUser = asyncHandler(async (req, res) => {
    // const { name, userName, password, email, phoneNumber, profileImage } = req.body;
    const userData = req.body;

    const token = await authService.createNewUser(userData);

    res.status(200).json({
        Response: {
            token
        }
    });
})

// signin
const signInUser = asyncHandler(async (req, res) => {
    const userData = req.body;

    const { userName, token } = await authService.signInUser(userData);

    res.status(200).json({
        userName, token
    });
})

const changePassword = asyncHandler(async (req, res) => {

    const { user } = req;
    const data = req.body
    const { status, message } = await authService.changePassword(data, user);

    res.status(200).json({
        status,
        message
    })
})

module.exports = {
    createNewUser,
    signInUser,
    changePassword
}