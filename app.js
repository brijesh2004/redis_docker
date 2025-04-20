const express = require('express');
const redisClient = require('./redisClient');
const app = express();
const PORT = 3000;

// Example route with caching
app.get('/data', async (req, res) => {
  const cacheKey = 'myData';

  const cachedData = await redisClient.get(cacheKey);
  if (cachedData) {
    return res.json({ from: 'cache hai', data: JSON.parse(cachedData) });
  }

  // Simulate DB or external API call
  const data = { message: 'Hello from DB!', timestamp: new Date() };

  // Save to Redis cache for 60 seconds
  await redisClient.setEx(cacheKey, 60, JSON.stringify(data));

  res.json({ from: 'server', data });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
