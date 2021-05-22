const express = require('express');
const app = express();
const data = require('./data/got.json');

/**
 * View setup
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/episodes', (req, res) => {
    res.render('episodes.hbs', { episodes: data });
});

app.get('/episodes/:id', (req, res) => {
    const episode = data.find((e) => e.id === Number(req.params.id));

    res.render('episode', {
        episode: episode,
    });
});

app.get('/', (req, res) => {
    res.redirect('/episodes');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});
