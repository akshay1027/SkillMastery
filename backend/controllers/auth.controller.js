const asyncHandler = require("../middlewares/asyncHandler.middleware");

const authService = require('../services/auth.service')

// signup
const createNewUser = asyncHandler(async (req, res) => {
    // const { name, userName, password, email, phoneNumber, profileImage } = req.body;
    const userData = req.body;

    const token = authService.createNewUser(userData);

    res.status(200).json({
        response: {
            token
        }
    });
})

// signin
const signInUser = asyncHandler(async (req, res) => {
    const userData = req.body;

    const { userName, token } = authService.signInUser(userData);

    res.status(200).json({ userName: userName, token });
    // } catch (error) {
    //     res.status(500).json({
    //         message: 'Something went wrong!', errorMessage: error.message,
    //     });
    // }

})

module.exports = {
    createNewUser,
    signInUser
}