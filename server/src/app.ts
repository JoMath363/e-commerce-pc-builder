import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import productsRouter from './routes/products.route';
import categoriesRouter from './routes/categories.route';
import usersRouter from './routes/users.route';
import authRouter from './routes/auth.route';
import profileRouter from './routes/profile.route';
import ordersRouter from './routes/orders.route';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET","POST","PUT","DELETE","PATCH","OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use(cookieParser());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/orders", ordersRouter);
app.use(errorHandler);

export default app;