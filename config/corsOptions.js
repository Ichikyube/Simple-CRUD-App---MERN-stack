const allowedOrigins = require('./allowedOrigin');

const corsOptions = {
    origin:  (origin, callback) => {
        // allow requests with no origin (like mobile apps or curl requests)
        if(allowedOrigins.indexOf(origin) !== -1 || !origin) callback(null, true);
        else {
            const mssg = 'Not allowed by CORS';
            callback(new Error(mssg), false);
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions;