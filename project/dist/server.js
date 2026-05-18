import express from 'express';
import userRouter from './routes/users.routes.js';
import rateLimitMiddleware from './middleware/rateLimit.middleware.js';
const app = express();
app.use(express.json());
app.use(rateLimitMiddleware);
app.use('/api', userRouter);
// error middleware
app.use((err, req, res) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=server.js.map