const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema(
    {
        reviews: [
            {
                userName: { type: String },
                comment: { type: String },
                tutorId: { type: String }
            }
        ]
    }
)

module.exports = ReviewModel = model('Review', ReviewSchema);