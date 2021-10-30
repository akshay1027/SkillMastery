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
    }
);

module.exports = UserModel = model('user', UserSchema);
