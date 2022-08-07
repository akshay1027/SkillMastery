const express = require('express');  // Build my REST API
const cors = require('cors');  // CORS
const morgan = require('morgan'); // Logging
const dotenv = require('dotenv');  //  Keep sensitive data

const connectToDb = require('./utils/connectToDb');
const redisClient = require('./utils/redisCache');
const rateLimiter = require('./utils/rateLimiter');


// Middleware
const errorHandler = require('./middlewares/errorHandler.middleware');
const routeNotFound = require('./middlewares/routeNotFound.middleware')


// App Routes 
const appRoutes = require('./routes/v1/index');

const API_ENDPOINT = '/api/v1';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'))
dotenv.config();

connectToDb();
redisClient();

// rate limiting clients based on ip address
app.use(rateLimiter);

// check if server is running
app.get('/', (req, res) => {
    res.send('Welcome to the skillMastery backend');
});

// App routes
app.use(`${API_ENDPOINT}`, appRoutes);

// Error handler
app.use(errorHandler);
const unexpectedErrorHandler = (error) => {
    console.log(error);
};
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

// 404 route not found
app.use('*', routeNotFound)



// server config listen to PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`);
})
