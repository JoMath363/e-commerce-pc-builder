import express from 'express';
import CartsController from '../controllers/carts.controller';
import { authenticate, requireAdmin } from '../middlewares/authenticate';

const router = express.Router();

export default router
  .get('/', authenticate, CartsController.getCart)
  .post('/:productId', authenticate, CartsController.createCartItem)
  .patch('/:productId', authenticate, CartsController.setCartItemQty)
  .delete('/:productId', authenticate, CartsController.deleteCartItem);