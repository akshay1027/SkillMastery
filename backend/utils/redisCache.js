const redis = require('redis');
// const util = require('util');

const redisClient = redis.createClient({
    // host: 'redis',
    // port: 6379
});

// const getAsync = util.promisify(redisClient.get).bind(redisClient);
// const setAsync = util.promisify(redisClient.set).bind(redisClient);


module.exports = redisClient
