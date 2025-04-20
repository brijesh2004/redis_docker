require('dotenv').config(); 
const { createClient } = require('redis');

// Use service name "redis" from docker-compose as host
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

console.log("redisClient hai ji" , process.env.REDIS_URL);

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;
