const express = require('express');
const http = require('http');
const router = require('./routes/router');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', router);

// HTTP server
const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from your app!\n');
});


const httpPort = 8080;

// Start
httpServer.listen(httpPort, () => {
  console.log(`HTTP Server running on port ${httpPort}`);
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).render('404');
});
