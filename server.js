import express from 'express';
import 'express-async-errors';

const app = express();
import * as dotenv from 'dotenv';
import morgan from "morgan";
import mongoose from 'mongoose';


// routes
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';


// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

dotenv.config();
app.use(express.json());
app.use(errorHandlerMiddleware);


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${port}....`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/jobs', jobRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

import { body, validationResult } from 'express-validator';

app.post(
    '/api/v1/test',
    [body('name').notEmpty().withMessage('name is required')],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((error) => error.msg);
            return res.status(400).json({ errors: errorMessages });
        }
        next();
    },
    (req, res) => {
        const { name } = req.body;
        res.json({ msg: `hello ${name}` });
    }
);

app.listen(port, () => {
    console.log('server running....');
});

/*
* {
* "company": "apple",
* "position": "front-end"
* }
* */