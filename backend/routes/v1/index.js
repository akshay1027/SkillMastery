const express = require('express');
const router = express.Router();

const tutorRoutes = require('./tutor.routes');
const userRoutes = require('./user.routes');

router.use('/user', userRoutes);
router.use('/tutor', tutorRoutes);

module.exports = router;