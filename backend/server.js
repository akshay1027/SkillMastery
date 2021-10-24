const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// express application, RESTful APIs
const app = express();

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

// cors & parse incoming data
app.use(cors());
app.use(express.json());

// routes 
app.use('/api/auth', authenticationRoutes);
app.use('/api/board', boardRoutes);

// test
app.get('/', (req, res) => res.send("Server is running"))

// server config listen to PORT
const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`);
})
