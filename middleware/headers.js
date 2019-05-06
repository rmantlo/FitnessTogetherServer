module.exports = function (req, res, next) {
    res.header('access-controll-allow-origin', '*');
    res.header('access-controll-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-controll-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next()
}