import express from 'express';
import type { Request, Response, NextFunction } from 'express';

const app = express();  
// build in middleware to parse JSON bodies
app.use(express.json());


const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.protocol} ${req.get('host')} ${req.url}`);
    next();
}


// custom middleware to log the request method and URL
app.use(logger);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});




app.listen(3001, () => {
    console.log('Server is running on port 3001');
});