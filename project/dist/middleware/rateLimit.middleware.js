// map
const requestCounts = new Map();
const maxRequests = 10;
const windowMs = 60 * 1000;
// middleware function
const rateLimitMiddleware = (req, res, next) => {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const userData = requestCounts.get(ip);
    if (!userData) {
        requestCounts.set(ip, {
            count: 1,
            firstRequestTime: now,
        });
        return next();
    }
    const timePassed = now - userData.firstRequestTime;
    if (timePassed > windowMs) {
        requestCounts.set(ip, {
            count: 1,
            firstRequestTime: now,
        });
        return next();
    }
    if (userData.count >= maxRequests) {
        return res.status(429).json({
            error: 'Too many requests. Please try again later.',
        });
    }
    userData.count += 1;
    requestCounts.set(ip, userData);
    next();
};
export default rateLimitMiddleware;
//# sourceMappingURL=rateLimit.middleware.js.map