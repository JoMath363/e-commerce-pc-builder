import { Request, Response, NextFunction } from 'express';
import CategoriesService from '../services/categories.service';

export default class CategoriesController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await CategoriesService.findAll();
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createNew(req: Request, res: Response, next: NextFunction) {
    try {
      const name = req.body.name || "";
      const data = await CategoriesService.create(name);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const name = req.body.name || "";
      const data = await CategoriesService.update(id, name);
      res.json(data);
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