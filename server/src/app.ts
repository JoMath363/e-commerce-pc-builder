import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.routes';
import categoriesRouter from './routes/categories.routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use(errorHandler);

export default app;