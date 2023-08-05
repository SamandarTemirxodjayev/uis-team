const express = require('express');
const router = require('./routes/router');

const app = express();
const httpPort = 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', router);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Start the Express server
app.listen(httpPort, () => {
  console.log(`Express server running on port ${httpPort}`);
});
