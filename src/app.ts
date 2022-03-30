import express from 'express';
import productsRouter from './router/productsRouter';
import userRouter from './router/userRouter';
import orderRouter from './router/orderRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
