const express = require('express');
const https = require('https');
const fs = require('fs');
const router = require('./routes/router');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', router);

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/uis-team.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/uis-team.com/fullchain.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/uis-team.com/chain.pem')
};

const server = https.createServer(options, app);

const port = 443; 

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.use((req, res, next) => {
  res.status(404).render('404');
});