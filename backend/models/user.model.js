const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        name: { type: String },
        userName: {
            type: String,
            required: true,
            unique: 'Account already exists with this userName'
        },
        email: {
            type: String,
            required: true,
            unique: 'Account already exists with this email'
        },
        password: { type: String, required: true },
        profileImage: { type: String },
        phoneNumber: { type: String },
        skills: [
            { type: String }
        ],
        teach: { type: Boolean },
        reviews: { type: Schema.Types.ObjectId, ref: 'Review' }, // reviews given by the user
        reviewsTutor: { type: Schema.Types.ObjectId, ref: 'Review' }, // reviews given got the user, if he/she is a teacher
        address: [
            { type: String }
        ],
        offlineMode: { type: Boolean },
        Tags: [
            { type: String }
        ],
        experience: { type: String },
        fee: { type: Number },
        about: { type: String }
    }
);

module.exports = UserModel = model('User', UserSchema);
