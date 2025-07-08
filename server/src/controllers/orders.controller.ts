import { Request, Response, NextFunction } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await OrdersService.findAll();
      res.json(items);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const item = await OrdersService.findById(id);
      if (!item) res.status(404).json({ message: 'Not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  static async getPreview(req: Request, res: Response, next: NextFunction) {
    try {
      const item = await OrdersService.preview(req.body);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  static async createNew(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const newItem = await OrdersService.create(data);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
}