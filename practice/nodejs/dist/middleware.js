import express from 'express';
const app = express();
// build in middleware to parse JSON bodies
app.use(express.json());
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
// custom middleware to log the request method and URL
app.use(logger);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=middleware.js.map