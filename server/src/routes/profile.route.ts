import express from 'express';
import ProfileController from '../controllers/profile.controller';
import { authenticate, requireAdmin } from '../middlewares/authenticate';

const router = express.Router();

export default router
  .get('/logged', authenticate, ProfileController.getLogged)
  .get('/orders', authenticate, ProfileController.getOrders)
  .post('/orders', authenticate, ProfileController.placeOrder)
  .get('/cart', authenticate, ProfileController.getCart)
  .post('/cart/:id', authenticate, ProfileController.addToCart)
  .patch('/cart/:id', authenticate, ProfileController.updateCartItemQty)
  .delete('/cart/:id', authenticate, ProfileController.removeFromCart);