const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongodbConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

const initializeConnectionToDb = () => {
    mongoose.connect(process.env.MONGO_URI, mongodbConnectionOptions, (error) => {
        if (error) {
            return console.error('mongo db connection error: ', error);
        }
        console.log("MongoDB working succesfully");
    })
}

module.exports = initializeConnectionToDb;