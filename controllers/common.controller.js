
const epis = require('../data/got.json')

module.exports.home = (req, res, next) => {
    res.render('common/home')
}

module.exports.episodes = (req, res, next) => {
    const { name } = req.query;
    let episodes =
        epis.filter(episodi => name ? episodi.name.includes(name) : true)
    let clean = false;
    if (episodes.length === epis.length) { clean = false } else { clean = true }
    res.render('common/episodes', {
        episodes: episodes,
        clean: clean
    });
}

