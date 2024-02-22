import express from 'express';
import {createServer} from 'http';
import mongoose from "mongoose";

const app = express();
const httpServer = createServer(app);

app.get('/', (req, res) => {
    res.send('Server is UP');
});

mongoose.connect('mongodb://localhost:27017/trello').then(() => {
    console.log('Connected to MongoDB');

    httpServer.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});