// module.exports.about = (req, res, next) => {
//     res.render('common/about', {
//         name: 'Julio',
//         time: new Date().toString(),
//         showTime: Math.random() > 0.5,
//         cities: ['Menorca', 'Huelva', 'Barcelona'],
//     });
// };

const epis = require('../data/got.json')

module.exports.home = (req, res, next) => {
    res.render('common/home')
}

// module.exports.episodes = (req, res, next) => {

//         res.render('common/episodes', {
//             epis: epis
//         })
//     }

module.exports.episodes = (req, res, next) => {
    const { name } = req.query;
    const episodes = epis.filter(episodi => name ? episodi.name.includes(name) : true)
    res.render('common/episodes', {
        episodes: episodes
    });
}


// module.exports.list = (req, res, next) => {
//     const { user } = req.query;
//     const tweets = tweetsDB
//         .filter(tweet => user ? tweet.user.includes(user) : true)
//         .sort((t1, t2) => t2.createdAt - t1.createdAt);

//     res.render('tweets/list', {
//         tweets: tweets,
//         user: user
//     });
// }