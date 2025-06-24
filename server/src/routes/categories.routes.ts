import express from 'express';
import CategoriesController from '../controllers/categories.controller';

const router = express.Router();

export default router
  .get('/', CategoriesController.getAll)
  .get('/:id', CategoriesController.getById)
  .post('/', CategoriesController.createNew)
  .put('/:id', CategoriesController.updateById)
  .delete('/:id', CategoriesController.deleteById);