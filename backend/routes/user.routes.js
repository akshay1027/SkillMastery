const express = require('express');
const router = express.Router();

const authenticationVerifier = require('../middlewares/authentication.middleware');

const {
    createNewUser,
    checkAuthenticationOfUser,
    getUserDetailsFromDb,
    createUserSkills,
    updateUserSkills,
    createReviewForTutor,
    updateReviewForTutor
} = require('../controllers/users.controller.js');

router.post('/', createNewUser);
router.post('/authenticate', checkAuthenticationOfUser);
router.get('/details', authenticationVerifier, getUserDetailsFromDb);

router.post('/skills/:userId', authenticationVerifier, createUserSkills)
router.put('/skills/:userId', authenticationVerifier, updateUserSkills);

router.post('/review/:tutorId', authenticationVerifier, createReviewForTutor);
router.put('/review/:tutorId', authenticationVerifier, updateReviewForTutor);
module.exports = router;