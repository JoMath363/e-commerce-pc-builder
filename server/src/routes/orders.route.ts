import express from 'express';
import OrdersController from '../controllers/orders.controller';
import { authenticate, requireAdmin } from '../middlewares/authenticate';

const router = express.Router();

export default router
  .get('/', authenticate, requireAdmin, OrdersController.getAll)
  .get('/:id', authenticate, requireAdmin, OrdersController.getById)
  .get('/preview', authenticate, OrdersController.getPreview)
  .post('/', authenticate, OrdersController.createNew);