// const { Schema, model } = require('mongoose');

// const StudentSchema = new Schema(
//     {
//         name: { type: String, required: true },
//         userName: {
//             type: String,
//             required: true,
//             unique: 'Account already exists with this userName'
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: 'Account already exists with this email'
//         },
//         password: { type: String, required: true },
//         profileImage: { type: String },
//         phoneNumber: { type: String },
//         skills: [
//             { type: String, required: true }
//         ],
//         reviews: [
//             {
//                 userName: { type: String },
//                 profileImage: { type: String },
//                 message: { type: String }
//             }
//         ],
//         address: [
//             { type: String }
//         ],
//         offlineMode: { type: Boolean },
//         // audience: { type: String },
//         // experience: { type: String },
//         // fee: { type: String }
//     }
// );

// module.exports = StudentModel = model('student', StudentSchema);
