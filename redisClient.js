require('dotenv').config(); 
const { createClient } = require('redis');

// Use service name "redis" from docker-compose as host
const redisClient = createClient({
  url:'redis://default:VcKPWFEN28Z8ffa6i3luYHovMmt2DWsy@redis-15177.c321.us-east-1-2.ec2.redns.redis-cloud.com:15177'
});


console.log("redisClient hai" , process.env.REDIS_URL);

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;
