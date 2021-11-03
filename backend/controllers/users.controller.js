const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;
const bcrypt = require('bcrypt');

const UserModel = require('../models/user.model');
const ReviewModel = require('../models/review.model');

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
        userData.password = bcrypt.hashSync(userData.password, salt);

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

const getUserDetailsFromDb = async (req, res) => {
    try {
        const { user } = req;

        res.status(200).json({
            response: {
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Request failed please check errorMessage key for more details',
            errorMessage: error.message,
        });
    }
};

const createUserSkills = async (req, res) => {
    try {
        const { user } = req;
        const { skills } = req.body;
        const userData = await UserModel.findById({ id: user.id })

        userData.skills.push(skills);

        const newUserData = new UserModel(userData);
        await newUserData.save();

        res.status(200).json({ message: 'skills added' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Request failed please check errorMessage key for more details',
            errorMessage: error.message,
        });
    }
}

// to remove duplicate skills from array : https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
const updateUserSkills = async (req, res) => {
    try {
        const { user } = req;
        const { skills } = req.body;
        const userData = await UserModel.findById({ id: user.id })

        // userData.skills.push(...skills);
        userData.skills.push(skills);

        const newUserData = new UserModel(userData);
        await newUserData.save();

        res.status(200).json({ message: 'skills updated' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Request failed please check errorMessage key for more details',
            errorMessage: error.message,
        });
    }
}

const createReviewForTutor = async (req, res) => {
    try {
        const tutorId = req.params.tutorId;
        const { message } = req.body; // this contains only message
        const { user } = req;

        // create an object of the user who made the review, the message and the tutorId(just incase i might have to show all the reviews a user has made)
        const review = {
            userName: user.userName,
            message: message,
            tutorId: tutorId
        };

        // save the review to review collection
        const saveReview = new ReviewModel(review);
        await saveReview.save();

        // find the user who made the review and the tutor on whom the review is made
        const userData = await UserModel.findById({ id: user._id });
        const tutorData = await UserModel.findById({ id: tutorId });

        // update the review in both user and tutor document seperately
        tutorData.review.push(saveReview._id);
        userData.review.push(saveReview._id);

        // save the documents of user and tutor to db
        const newUserData = new UserModel(userData);
        await newUserData.save();
        const newTutorData = new UserModel(tutorData);
        await newTutorData.save();

        res.status(200).json({ message: 'Review added!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Request failed please check errorMessage key for more details',
            errorMessage: error.message,
        });
    }
}

module.exports = {
    createNewUser,
    checkAuthenticationOfUser,
    getUserDetailsFromDb,
    createUserSkills,
    updateUserSkills,
    createReviewForTutor
};