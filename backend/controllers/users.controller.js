
const asyncHandler = require("../middlewares/asyncHandler.middleware");

const userService = require("../services/user.service");

const getUserDetails = asyncHandler(async (req, res) => {
    const { user } = req;

    // const { email, firstname, lastname } = await userService.getUserDetails(user);
    res.status(200).json({
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
    });
}
);

const createUserSkills = asyncHandler(async (req, res) => {
    const { user } = req;
    const { skills } = req.body;

    const { status, message } = await userService.createUserSkills(user, skills);

    res.status(200).json({
        status,
        message
    });
});

// to remove duplicate skills from array : https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
// maybe shift from array to hashmap as order doesnot matter here!
const updateUserSkills = asyncHandler(async (req, res) => {
    const { user } = req;
    const { skills } = req.body;
    const userData = await UserModel.findById({ id: user.id });

    // userData.skills.push(...skills);
    userData.skills.push(skills);

    const newUserData = new UserModel(userData);
    await newUserData.save();

    res.status(200).json({ message: 'skills updated' });
});

const createReviewForTutor = asyncHandler(async (req, res) => {
    const tutorId = req.params.tutorId;
    const { message } = req.body; // this contains only message
    const { user } = req;

    // create an object of the user who made the review, the message and the tutorId(just incase i might have to show all the reviews a user has made)
    const review = {
        userName: user.userName,
        message: message,
        tutorId: tutorId
    };

    // save the review to review collection
    const saveReview = new ReviewModel(review);
    await saveReview.save();

    // find the user who made the review and the tutor on whom the review is made
    const userData = await UserModel.findById({ id: user._id });
    const tutorData = await UserModel.findById({ id: tutorId });

    // update the review in both user and tutor document seperately
    tutorData.reviewTutor.push(saveReview._id);
    userData.review.push(saveReview._id);

    // save the documents of user and tutor to db
    const newUserData = new UserModel(userData);
    await newUserData.save();
    const newTutorData = new UserModel(tutorData);
    await newTutorData.save();

    res.status(200).json({ message: 'Review added!' });
});

module.exports = {
    getUserDetails,
    createUserSkills,
    updateUserSkills,
    createReviewForTutor
};