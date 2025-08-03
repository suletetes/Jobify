import express from 'express';
import 'express-async-errors';

const app = express();
import * as dotenv from 'dotenv';
import morgan from "morgan";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

// routes
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from "./routes/userRouter.js";

import {body, validationResult} from 'express-validator';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import {authenticateUser} from './middleware/authMiddleware.js';

dotenv.config();
app.use(express.json());
app.use(errorHandlerMiddleware);
app.use(cookieParser());


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
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);



app.post(
    '/api/v1/test',
    [body('name').notEmpty().withMessage('name is required')],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((error) => error.msg);
            return res.status(400).json({errors: errorMessages});
        }
        next();
    },
    (req, res) => {
        const {name} = req.body;
        res.json({msg: `hello ${name}`});
    }
);

app.use('*', (req, res) => {
    res.status(404).send('Route not found')
})

app.listen(port, () => {
    console.log('server running....');
});

/*
* {
* "company": "apple",
* "position": "front-end"
* }
* */