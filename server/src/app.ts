import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { authRoutes } from './routes';

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', authRoutes);
