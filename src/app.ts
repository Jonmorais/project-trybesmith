import express from 'express';
import productsRouter from './router/productsRouter';
import userRouter from './router/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);

export default app;
