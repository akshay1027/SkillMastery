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
        const tutor = await UserModel.findById({ id });
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
        const reviews = [];
        const { tutorId } = req.params;

        const allReviews = await ReviewModel.find({});
        for (const reviewId of allReviews) {
            isReviewExisting = ReviewModel.findById({ id: tutorId })
            reviews.push(isReviewExisting);
        }
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            errorMessage: error.message
        })
    }
}

module.exports = {
    getAllTutors,
    getTutorById
};