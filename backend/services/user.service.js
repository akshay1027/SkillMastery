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
            message: 'skills added',
            response: userData.skills
        }
    } catch (error) {
        console.error(error);
        throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, 'Request failed, internal server error');
    }
}

// to remove duplicate skills from array : https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
const updateUserSkills = async (user, skills) => {
    try {
        const userData = await UserModel.findById({ id: user.id });

        // userData.skills.push(...skills);
        // ⭐i think you cant push like that, it wont work if any previous skills may be deleted!

        userData.skills.push(...skills);

        // const newUserData = new UserModel(userData);
        await userData.save();

        return {
            status: 'successful',
            message: 'skills updated',
            response: userData.skills
        }
    } catch (error) {
        console.error(error);
        throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, 'Request failed, internal server error');
    }
}

const createReviewForTutor = async (tutorId, user, comment) => {
    try {
        // create an object of the user who made the review, the message and the tutorId(just incase i might have to show all the reviews a user has made)
        const review = {
            userName: user.userName,
            comment: comment,
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
        // const newUserData = new UserModel(userData);
        await userData.save();
        // const newTutorData = new UserModel(tutorData);
        await tutorData.save();

        return {
            status: 'successful',
            message: 'review added',
            response: review
        }
    } catch (error) {
        console.error(error);
        throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, 'Request failed, internal server error');
    }
}

module.exports = {
    createUserSkills,
    updateUserSkills,
    createReviewForTutor
};