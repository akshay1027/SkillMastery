const express = require('express');
const router = express.Router();

const authenticationVerifier = require('../middlewares/authentication.middleware');

const {
    getAllTutors,
    getTutorById,
    getAllReviewsForTutor
} = require('../controllers/tutors.controller.js');

router.get('/', getAllTutors);
router.get('/:id', authenticationVerifier, getTutorById);
router.get('/reviews', getAllReviewsForTutor)
// router.post('/:id/book-demo', authenticationVerifier, bookDemoWithTutor);
// router.get('/details', authenticationVerifier, getUserDetailsFromDb);

module.exports = router;