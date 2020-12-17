module.exports.about = (req, res, next) => {
    res.render('common/about', {
        name: 'Julio',
        time: new Date().toString(),
        showTime: Math.random() > 0.5,
        cities: ['Menorca', 'Huelva', 'Barcelona'],
    });
};
