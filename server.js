const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', function(req, res) {
  res.render('sign-in');
});

app.get('/auth/google', function(req, res) {
  res.render('google', {
    name: 'Matt'
  });
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry I cannot find it');
});

app.listen(3000);
