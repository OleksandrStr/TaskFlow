import express from 'express';
import {createServer} from 'http';
import mongoose from "mongoose";
import * as usersController from './controllers/users';
import bodyParser from 'body-parser';
import authMiddleware from './middlewares/auth'
import {mongodbUri, serverPort} from "./config";

const app = express();
const httpServer = createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Server is UP');
});

app.post('/api/users', usersController.register);
app.post('/api/users/login', usersController.login);
app.get('/api/user', authMiddleware, usersController.currentUser);

mongoose.connect(mongodbUri).then(() => {
    console.log('Connected to MongoDB');

    httpServer.listen(serverPort, () => {
        console.log(`Server is running on port ${serverPort}`);
    });
});