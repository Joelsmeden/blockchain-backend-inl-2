import express from 'express';
import {
  getChain,
  createTransaction,
  mineBlock,
  getItem,
} from './controllers/chainController.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());

// Routes
app.get('/chain', getChain);
app.post('/transactions', createTransaction);
app.post('/mine', mineBlock);
app.get('/items/:itemId', getItem);

app.use(errorHandler);

export default app;
