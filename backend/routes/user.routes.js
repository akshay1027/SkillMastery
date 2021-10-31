const express = require('express');
const router = express.Router();

const authenticationVerifier = require('../middlewares/authentication.middleware');

const {
    createNewUser,
    checkAuthenticationOfUser
    // getUserDetailsFromDb,
} = require('../controllers/users.controller.js');

router.post('/', createNewUser);
router.post('/authenticate', checkAuthenticationOfUser);
// router.get('/details', authenticationVerifier, getUserDetailsFromDb);

module.exports = router;