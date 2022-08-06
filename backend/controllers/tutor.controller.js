const UserModel = require('../models/user.model');
const ReviewModel = require('../models/review.model');
const asyncHandler = require('../middlewares/asyncHandler.middleware');

const tutorService = require('../services/tutor.service');


const getAllTutors = asyncHandler(async (req, res) => {
    const { status, message, response } = await tutorService.getAllTutors()

    res.status(201).json({
        status,
        response
    });
})

const getTutorById = asyncHandler(async (req, res) => {

    const { tutorId } = req.params;
    const { status, message, response } = await tutorService.getTutorById()

    res.status(201).json({
        status,
        response
    });
})

const getAllReviewsForTutor = asyncHandler(async (req, res) => {
    // const reviews = [];
    const { tutorId } = req.params;
    const { status, message, response } = await tutorService.getAllReviewsForTutor(tutorId)

    res.status(200).json({
        status,
        response
    });

})

module.exports = {
    getAllTutors,
    getTutorById,
    getAllReviewsForTutor
};