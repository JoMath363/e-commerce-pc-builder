import express from 'express';
import ProductController from '../controllers/products.controller';
import { authenticate, requireAdmin } from '../middlewares/authenticate';

const router = express.Router();

export default router
  .get('/', ProductController.getByFilter)
  .get('/:id', ProductController.getById)
  .post('/', authenticate, requireAdmin, ProductController.createNew)
  .put('/:id', authenticate, requireAdmin, ProductController.updateById)
  .delete('/:id', authenticate, requireAdmin, ProductController.deleteById);