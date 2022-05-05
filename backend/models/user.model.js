const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
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
        // reviews: [
        //     {
        //         userName: { type: String },
        //         profileImage: { type: String },
        //         message: { type: String }
        //     }
        // ],
        reviews: { type: Schema.Types.ObjectId, ref: 'Review' }, // reviews given by the user
        reviewsTutor: { type: Schema.Types.ObjectId, ref: 'Review' }, // reviews given got the user, if he/she is a teacher
        address: [
            { type: String }
        ],
        offlineMode: { type: Boolean },
        audience: { type: String },
        experience: { type: String },
        fee: { type: String },
        about: { type: String }
    }
);

module.exports = UserModel = model('User', UserSchema);
