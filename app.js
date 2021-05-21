const express = require('express');
const app = express();

app.use(express.static('public'))

/**
 * View setup
 */
app.set('views', __dirname + 'views');
app.set('view engine', 'hbs');


const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});
