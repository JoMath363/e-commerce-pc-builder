import express from 'express';
import ProductController from '../controllers/products.controller';

const router = express.Router();

export default router
  .get('/', ProductController.getByFilter)
  .get('/:id', ProductController.getById)
  .post('/', ProductController.createNew)
  .put('/:id', ProductController.updateById)
  .delete('/:id', ProductController.deleteById);