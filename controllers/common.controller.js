const episodes = require('../data/got.json');

module.exports.episodes = (req, res, next) => {
    res.render('episodes', { episodes });
};
