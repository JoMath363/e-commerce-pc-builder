import express from 'express';
import CategoriesController from '../controllers/categories.controller';
import { authenticate, requireAdmin } from '../middlewares/authenticate';

const router = express.Router();

export default router
  .get('/', CategoriesController.getAll)
  .get('/:id', CategoriesController.getById)
  .post('/', authenticate, requireAdmin, CategoriesController.createNew)
  .put('/:id', authenticate, requireAdmin, CategoriesController.updateById)
  .delete('/:id', authenticate, requireAdmin, CategoriesController.deleteById);