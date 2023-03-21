const {
    logEvents
} = require('./logger');

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t
        ${req.headers.origin}`, 'errLog.log');
    console.log(err.stack);

    res.status(err.status || 500); //server Error
    const status = res.statusCode;
    res.json({ status: status, message: err.message })
};

module.exports = errorHandler;