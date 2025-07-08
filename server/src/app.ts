import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.route';
import categoriesRouter from './routes/categories.route';
import usersRouter from './routes/users.route';
import authRouter from './routes/auth.route';
import ordersRouter from './routes/orders.route';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/orders", ordersRouter);
app.use(errorHandler);

export default app;