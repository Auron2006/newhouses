const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express.js on Vercel!' });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, this is another route!' });
});

// Export the app wrapped with serverless
module.exports = app;
module.exports.handler = serverless(app);