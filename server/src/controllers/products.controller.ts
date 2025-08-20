import { Request, Response, NextFunction } from 'express';
import ProductsService from '../services/prodcuts.service';

export default class ProductsController {
  static async getByFilter(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        page: +(req.query.page ?? 1),
        pageSize: +(req.query.pageSize ?? 10),
        name: req.query.name as string,
        category: req.query.category as string,
        minPrice: req.query.minPrice ? +req.query.minPrice : undefined,
        maxPrice: req.query.maxPrice ? +req.query.maxPrice : undefined
      }

      const data = await ProductsService.find(query);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const item = await ProductsService.findById(id);
      if (!item) {
        res.status(404).json({ message: 'Not found' }); return;
      }

      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  static async createNew(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const newItem = await ProductsService.create(data);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedItem = await ProductsService.update(id, data);
      res.json(updatedItem);
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      await ProductsService.delete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}