import { Request, Response, NextFunction } from 'express';
import CartsService from '../services/carts.service';

export default class CartsController {
  static async getCart(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id ?? "";

      const data = await CartsService.getCart(userId);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createCartItem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id ?? "";
      const productId = req.params.productId;

      const data = await CartsService.createCartItem(userId, productId);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async setCartItemQty(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id ?? "";
      const productId = req.params.productId;
      const quantity = +(req.body.quantity ?? 1);

      const data = await CartsService.setCartItemQty(userId, productId, quantity);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCartItem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id ?? "";
      const productId = req.params.productId;

      const data = await CartsService.deleteCartItem(userId, productId);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}