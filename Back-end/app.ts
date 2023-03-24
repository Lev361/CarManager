import express from 'express';
import { routerClient } from './src/routes/client';
const app = express();

app.use(express.json())

app.use(routerClient)

export default app;
