import express from 'express';
import {createServer} from 'http';
import mongoose from "mongoose";
import * as usersController from './controllers/users';
import bodyParser from 'body-parser';

const app = express();
const httpServer = createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Server is UP');
});

app.post('/api/users', usersController.register);

mongoose.connect('mongodb://localhost:27017/trello').then(() => {
    console.log('Connected to MongoDB');

    httpServer.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});