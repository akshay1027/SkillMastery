const UserModel = require('../models/user.model');
const ReviewModel = require('../models/review.model');

const ErrorResponse = require('../utils/errorResponse');
const httpStatus = require('../utils/httpStatusCode');

// const getUserDetails = async (user) => {
//     try {
//         return {
//             email: user.email,
//             firstname: user.firstname,
//             lastname: user.lastname,
//         }
//     } catch (error) {
//         console.error(error);
//         throw new ErrorResponse(500, 'Request failed, internal server error');
//     }
// };

const createUserSkills = async (user, skills) => {
    try {
        const userData = await UserModel.findById({ id: user.id })

        // for (let skill in skills) {
        //     userData.skills.push(skill);
        // }
        userData.skills.push(...skills);

        const newUserData = new UserModel(userData);
        await newUserData.save();

        return {
            status: 'successful',
            message: 'skills added'
        }
    } catch (error) {
        console.error(error);
        throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, 'Request failed, internal server error');
    }
}

// to remove duplicate skills from array : https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
const updateUserSkills = async (req, res) => {
    try {
        const { user } = req;
        const { skills } = req.body;
        const userData = await UserModel.findById({ id: user.id });

        // userData.skills.push(...skills);
        // ⭐⚠ i think you cant push like that, it wont work if any previous skills may be deleted!
        userData.skills.push(skills);

        const newUserData = new UserModel(userData);
        await newUserData.save();

        return {
            status: 'successful',
            message: 'skills updated'
        }
    } catch (error) {
        console.error(error);
        throw new ErrorResponse(500, 'Request failed, internal server error');
    }
}

const createReviewForTutor = async (req, res) => {
    try {
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
    } catch (error) {
        console.error(error);
        throw new ErrorResponse(500, 'Request failed, internal server error');
    }
}

module.exports = {
    createUserSkills,
    updateUserSkills,
    createReviewForTutor
};