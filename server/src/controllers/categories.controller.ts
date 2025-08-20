import { Request, Response, NextFunction } from 'express';
import CategoriesService from '../services/categories.service';

export default class CategoriesController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await CategoriesService.findAll();
      res.json(items);
    } catch (error) {
      next(error);
    }
  }

  static async createNew(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const newItem = await CategoriesService.create(data);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedItem = await CategoriesService.update(id, data);
      res.json(updatedItem);
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      await CategoriesService.delete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}