const express = require('express');
const router = express.Router();

const authenticationVerifier = require('../../middlewares/authentication.middleware');

const {
    signInUser,
    createNewUser,
    changePassword
} = require('../../controllers/auth.controller.js');

router.post('/signin', signInUser);
router.post('/register', createNewUser);
// authorised routes
router.patch('/change-password', authenticationVerifier, changePassword)

module.exports = router;