import express from 'express';
import AuthController from '../controllers/auth.controller';
import { authenticate, requireAdmin } from '../middlewares/authenticate';

const router = express.Router();

export default router
  .post('/register', AuthController.register)
  .post('/login', AuthController.login)
  .get('/info', authenticate, AuthController.getInfo);