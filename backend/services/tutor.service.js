const UserModel = require('../models/user.model');
const ReviewModel = require('../models/review.model');
const httpStatus = require('../utils/httpStatusCode');

const getAllTutors = async () => {
    try {
        // to get all tutors alone from users.
        const tutors = await UserModel.find({ teach: true });

        return {
            status: 'successful',
            message: 'all tutors retured',
            response: tutors
        }

    } catch (error) {
        console.error(error);
        throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, 'Request failed, internal server error');
    }
}

const getTutorById = async (tutorId) => {
    try {
        const tutor = await UserModel.findById({ tutorId });

        return {
            status: 'successful',
            message: 'all tutors retured',
            response: tutor
        }
    } catch (error) {
        console.error(error);
        throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, 'Request failed, internal server error');
    }
}

const getAllReviewsForTutor = async (tutorId) => {
    try {
        const tutorReviews = await ReviewModel.find({ tutorId });

        // looping over all tutor reviews and inserting profile image of user.
        for (const review of tutorReviews) {
            const user = await UserModel.findOne({ userName: review.userName });
            tutorReviews.profileImage = user.profileImage;
        }

        return {
            status: 'successful',
            message: 'all tutors retured',
            response: tutorReviews
        }
    } catch (error) {
        console.error(error);
        throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, 'Request failed, internal server error');
    }
}

module.exports = {
    getAllTutors,
    getTutorById,
    getAllReviewsForTutor
};