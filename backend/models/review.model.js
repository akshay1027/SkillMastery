const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema(
    {
        reviews: [
            {
                userName: { type: String },
                profileImage: { type: String },
                message: { type: String }
            }
        ]
    }
)

module.exports = ReviewModel = model('review', ReviewSchema);