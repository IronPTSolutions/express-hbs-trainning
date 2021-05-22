const express = require('express');
const app = express();

const data = require('./data/got.json');

app.use(express.static('public'))
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/home', (req, res) => {
    res.render('home');
}) 

app.get('/', (req, res) => {
    res.redirect('/home');
}) 

app.get('/season:seasonId', (req, res) => {
    const episodes = data.filter((e) => e.season === Number(req.params.seasonId))
    res.render('season', {
        data: episodes,
        seasonNumber: Number(req.params.seasonId)
    })
})  


const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});
