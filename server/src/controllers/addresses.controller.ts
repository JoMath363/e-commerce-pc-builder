import { Request, Response, NextFunction } from 'express';
import AddressesService from '../services/addresses.service';

export default class AddressesController {
  static async getAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id ?? "";

      const data = await AddressesService.getAddress(userId);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id ?? "";
      const adress = req.body;

      const data = await AddressesService.createAddress(userId, adress);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async updateAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id ?? "";
      const adress = req.body;

      const data = await AddressesService.updateAddress(userId, adress);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
}