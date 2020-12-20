const path = require('path');
const express = require('express');
const logger = require('morgan');
const hbs = require('hbs');
const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.use(logger('dev'));

/*
View setup
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const router = require('./config/routes.js');
app.use('/', router);

const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});