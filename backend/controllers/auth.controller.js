const asyncHandler = require("../middlewares/asyncHandler.middleware");

const authService = require('../services/auth.service')

// signup
const createNewUser = asyncHandler(async (req, res) => {
    // const { name, userName, password, email, phoneNumber, profileImage } = req.body;
    const userData = req.body;

    const token = await authService.createNewUser(userData);
    // console.log("☁", token)

    // console.log('⭐');
    res.status(200).json({
        Response: {
            token
        }
    });
})

// signin
const signInUser = asyncHandler(async (req, res) => {
    const userData = req.body;

    const { userName, token } = authService.signInUser(userData);

    res.status(200).json({
        userName, token
    });
})

module.exports = {
    createNewUser,
    signInUser
}