import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { userRoutes, boardRoutes, columnsRoutes, tasksRoutes } from './routes';

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/columns', columnsRoutes);
app.use('/api/tasks', tasksRoutes);
