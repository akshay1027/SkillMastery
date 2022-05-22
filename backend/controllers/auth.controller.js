const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;
const bcrypt = require('bcrypt');

const UserModel = require('../models/user.model');

const authService = require('../services/auth.service')

const getToken = require('../utils/getToken');

// signup
const createNewUser = async (req, res) => {
    try {
        // const { name, userName, password, email, phoneNumber, profileImage } = req.body;
        const userData = req.body;



        const user = await UserModel.findOne({ email: userData.email, userName: userData.userName });
        if (user) {
            res.status(409).json({ message: 'Account already exists for this email/username' });
        }

        const salt = await bcrypt.genSalt(10);
        userData.password = bcrypt.hash(userData.password, salt);

        const NewUser = new UserModel(userData);
        await NewUser.save();

        const token = getToken(NewUser._id);

        res.status(200).json({
            response: {
                token
            }
        });

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong', errorMessage: error.message
        });
    }
}

// signin
const checkAuthenticationOfUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!user || !isPasswordValid) {
            res.status(403).json({ message: 'Email or password is incorrect!' });
        }

        const token = getToken(user._id);
        res.status(200).json({ userName: user.userName, token });

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong!', errorMessage: error.message,
        });
    }

}