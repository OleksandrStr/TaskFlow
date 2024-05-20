import express from 'express';
import mongoose from 'mongoose';
import * as usersController from './controllers/users';
import bodyParser from 'body-parser';
import authMiddleware from './middlewares/auth';
import { mongodbUri, serverPort } from './config';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.send('Server is UP');
});

app.post('/api/users', usersController.register);
app.post('/api/users/login', usersController.login);
app.get('/api/user', authMiddleware, usersController.getCurrentUser);

mongoose.connect(mongodbUri).then(() => {
  console.info('Connected to MongoDB');

  app.listen(serverPort, () => {
    console.info(`Server is running on port ${serverPort}`);
  });
});
