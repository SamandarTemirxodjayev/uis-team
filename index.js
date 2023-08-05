const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
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

// HTTPS options
const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/uis-team.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/uis-team.com/fullchain.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/uis-team.com/chain.pem')
};

// HTTPS server
const httpsServer = https.createServer(httpsOptions, app);

const httpPort = 80;
const httpsPort = 443;

// Start both HTTP and HTTPS servers
httpServer.listen(httpPort, () => {
  console.log(`HTTP Server running on port ${httpPort}`);
});

httpsServer.listen(httpsPort, () => {
  console.log(`HTTPS Server running on port ${httpsPort}`);
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).render('404');
});
