const express = require('express');
const app = express();


/**
 * View setup
 */
app.set('views', __dirname + 'views');
app.set('view engine', 'hbs');


const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});
