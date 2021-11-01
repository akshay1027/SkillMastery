const UserModel = require('../models/user.model');

const getAllTutors = async (req, res) => {
    try {
        // to get all tutors alone from users.
        const tutors = UserModel.find({ teach: true });
        res.status(201).json({ tutors });

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            errorMessage: error.message
        })
    }
}

const getTutorById = async (req, res) => {
    try {
        const { id } = req.body;
        const tutor = UserModel.findById({ id });
        res.status(201).json({ tutor });

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            errorMessage: error.message
        })
    }
}

module.exports = {
    getAllTutors,
    getTutorById
};