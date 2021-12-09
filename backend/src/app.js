import express from 'express';
import cors from 'cors';
import config from 'config';
import { errors } from 'celebrate';
import { connectToDatabase } from './helpers/db.js';
import { errorHandler } from './helpers/index.js';
import routers from './routers/index.js';

const app = express();
connectToDatabase();
app.set('port', config.get('app.port') || 5000);
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use('/api', routers);
app.use(errorHandler);
app.use(errors());
// app.use(express.static('public'));

export default app;
