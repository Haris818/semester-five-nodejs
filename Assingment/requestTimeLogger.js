function requestTimeLogger(req, res, next) {
    const currentTime = new Date().toLocaleString();
    req.requestTime = currentTime;
    console.log("Request received at:", currentTime);
    next();
}

module.exports = requestTimeLogger;
