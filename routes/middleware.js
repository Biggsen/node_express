/**
    Initialises the standard view locals

    The included layout depends on the navLinks array to generate
    the navigation in the header, you may wish to change this array
    or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
    res.locals.navLinks = [
        { label: 'Home', key: 'home', href: '/' },
        { label: 'Article', key: 'article', href: '/article' },
    ];
    next();
};