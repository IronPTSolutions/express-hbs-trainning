const path = require('path');
const express = require('express');
const logger = require('morgan');
const hbs = require('handlebars');
const app = express();

/* Middlewares */
app.use(logger('dev'));

/**
 * View setup
 */
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
const router = require('./config/routes.js');
app.use('/', router);
require('./config/hbs.config');


const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});
