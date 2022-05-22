const express = require('express');
const router = express.Router();

const tutorRoutes = require('./tutor.routes');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');

router.use('/auth', authRoutes)
router.use('/user', userRoutes);
router.use('/tutor', tutorRoutes);

module.exports = router;