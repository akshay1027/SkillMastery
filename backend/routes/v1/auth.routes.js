const express = require('express');
const router = express.Router();

const authenticationVerifier = require('../../middlewares/authentication.middleware');

const {
    signInUser,
    createNewUser
} = require('../../controllers/auth.controller.js');

router.post('/signin', signInUser);
router.post('/register', createNewUser);

// router.get('/reviews/:tutorId', getAllReviewsForTutor)
// router.post('/:id/book-demo', authenticationVerifier, bookDemoWithTutor);
// router.get('/details', authenticationVerifier, getUserDetailsFromDb);

module.exports = router;