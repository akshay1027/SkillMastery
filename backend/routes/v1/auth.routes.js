const express = require('express');
const router = express.Router();

const authenticationVerifier = require('../../middlewares/authentication.middleware');

const {
    getAllTutors,
    getTutorById,
    getAllReviewsForTutor
} = require('../../controllers/tutor.controller.js');

router.get('/', getAllTutors);
router.get('/:tutorId', authenticationVerifier, getTutorById);
router.get('/reviews/:tutorId', getAllReviewsForTutor)
// router.post('/:id/book-demo', authenticationVerifier, bookDemoWithTutor);
// router.get('/details', authenticationVerifier, getUserDetailsFromDb);

module.exports = router;