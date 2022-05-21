const express = require('express');  // Build my REST API
const mongoose = require('mongoose');  // Used for CRUD operations
const cors = require('cors');  // CORS
const dotenv = require('dotenv');  //  Keep sensitive data

// Routes 
const authenticationRoutes = require('./middlewares/authentication.middleware');

const appRoutes = require('./routes/v1/index');
const userRoutes = require('./routes/v1/user.routes');
const tutorsRoutes = require('./routes/v1/tutor.routes');
// const skillsRoutes = require('./routes/skills.routes');

// RESTful APIs
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

// mongoDB config for backend API
const mongodbConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // useFindAndModify: false
};

mongoose.connect(process.env.MONGO_URI, mongodbConnectionOptions, (error) => {
    if (error) {
        return console.error('error: ', error);
    }
    console.log("mongoDB working succesfully");
});

// check if server is running
app.get('/', (req, res) => {
    res.send('Welcome to the skillMastery backend');
});

// These endpoint are public routes
app.use('/api', appRoutes);
// app.use('/api/tutors', tutorsRoutes); // all the tutors routes. contains public and private routes!

// Authentication verifier middleware, please do not move.
app.use(authenticationRoutes);

// server config listen to PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`);
})
