
const asyncHandler = require("../middlewares/asyncHandler.middleware");
const httpStatus = require("../utils/httpStatusCode");

const userService = require("../services/user.service");

const getUserDetails = asyncHandler(async (req, res) => {
    const { user } = req;

    // const { email, firstname, lastname } = await userService.getUserDetails(user);
    res.status(httpStatus.OK).json({
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
    });
}
);

const createUserSkills = asyncHandler(async (req, res) => {
    const { user } = req;
    const { skills } = req.body;

    const { status, message, response } = await userService.createUserSkills(user, skills);

    res.status(httpStatus.OK).json({
        status,
        response
    });
});

// to remove duplicate skills from array : https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
// maybe shift from array to hashmap as order doesnot matter here!
const updateUserSkills = asyncHandler(async (req, res) => {
    const { user } = req;
    const { skills } = req.body;

    const { status, message, response } = await userService.updateUserSkills(user, skills)

    res.status(httpStatus.OK).json({
        status,
        response
    });
});

const createReviewForTutor = asyncHandler(async (req, res) => {
    const tutorId = req.params.tutorId;
    const { comment } = req.body; // this contains only message
    const { user } = req;

    const { status, message, response } = userService.createReviewForTutor(tutorId, user, comment)

    res.status(httpStatus.OK).json({
        status,
        response
    });
});

module.exports = {
    getUserDetails,
    createUserSkills,
    updateUserSkills,
    createReviewForTutor
};