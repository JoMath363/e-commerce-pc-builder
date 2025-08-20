import express from 'express';
import ProfileController from '../controllers/profile.controller';
import { authenticate, requireAdmin } from '../middlewares/authenticate';

const router = express.Router();

export default router
  .get('/me', authenticate, ProfileController.getLogged);
  /* .get('/orders', authenticate, ProfileController.getOrders; */
  /* .post('/orders', authenticate, ProfileController.createOrder); */
  /* .get('/cart', authenticate, ProfileController.getCart); */
  /* .patch('/cart', authenticate, ProfileController.updateCart); */