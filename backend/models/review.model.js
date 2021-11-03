const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema(
    {
        reviews: [
            {
                userName: { type: String },
                message: { type: String },
                tutorId: { type: String }
            }
        ]
    }
)

module.exports = ReviewModel = model('Review', ReviewSchema);