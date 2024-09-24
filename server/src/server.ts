import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { mongodbUri, serverPort } from './config';
import cors from 'cors';
import { userController } from './controllers';
import { authMiddleware } from './middlewares';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.send('Server is UP');
});

app.post('/api/users', userController.register);
app.post('/api/users/login', userController.login);
app.get('/api/user', authMiddleware, userController.getCurrentUser);

mongoose.connect(mongodbUri).then(() => {
  console.info('Connected to MongoDB');

  app.listen(serverPort, () => {
    console.info(`Server is running on port ${serverPort}`);
  });
});
