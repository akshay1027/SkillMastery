const UserModel = require('../models/user.model');
const ReviewModel = require('../models/review.model');

const getAllTutors = async (req, res) => {
    try {
        // to get all tutors alone from users.
        const tutors = await UserModel.find({ teach: true });
        res.status(201).json({ tutors });

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            errorMessage: error.message
        })
    }
}

const getTutorById = async (req, res) => {
    try {
        const { tutorId } = req.params;
        const tutor = await UserModel.findById({ tutorId });
        res.status(201).json({ tutor });

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            errorMessage: error.message
        })
    }
}

const getAllReviewsForTutor = async (req, res) => {
    try {
        // const reviews = [];
        const { tutorId } = req.params;

        const tutorReviews = await ReviewModel.find({ tutorId: tutorId });
        /* 
            review = {
                userName,
                message,
                tutorId
            }
        */
        // looping over all tutor reviews and inserting profile image of user.
        for (const review of tutorReviews) {
            const user = await UserModel.findOne({ userName: review.userName });
            tutorReviews.profileImage = user.profileImage;
        }

        res.status(200).json({ tutorReviews });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            errorMessage: error.message
        })
    }
}

module.exports = {
    getAllTutors,
    getTutorById,
    getAllReviewsForTutor
};