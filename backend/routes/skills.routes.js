const express = require('express');
const router = express.Router();

const authenticationVerifier = require('../middlewares/authentication.middleware');

router.post('/add', authenticationVerifier, addUserSkills)
router.put('/update', authenticationVerifier, updateUserSkills);

module.exports = router;