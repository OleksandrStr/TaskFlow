import mongoose from 'mongoose';
import { mongodbUri, serverPort } from './config';
import { app } from './app';

mongoose.connect(mongodbUri).then(() => {
  console.info('Connected to MongoDB');

  app.listen(serverPort, () => {
    console.info(`Server is running on port ${serverPort}`);
  });
});
