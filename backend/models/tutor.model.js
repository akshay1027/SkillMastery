const { Schema, model } = require('mongoose');

const TutorSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        skills: [
            { type: String, required: true }
        ],
        reviews: [
            {
                name: { type: String },
                profileImage: { type: String },
                message: { type: String }
            }
        ],
        address: [
            { type: String }
        ],
        offlineMode: { type: Boolean },
        audience: { type: String },
        experience: { type: String },
        fee: { type: String }
    }
);

module.exports = TutorModel = model('tutor', TutorSchema);
