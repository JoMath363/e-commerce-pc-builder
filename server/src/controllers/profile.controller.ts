import { Request, Response, NextFunction } from 'express';
import ProfileService from '../services/profile.service';

export default class ProfileController {
  static async getLogged(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user?.email || ""
      const user = await ProfileService.findInfo(email);
      if (!user) res.status(404).json({ message: 'Not found' });
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async getOrders(req: Request, res: Response, next: NextFunction) {
    //
  }

  static async placeOrder(req: Request, res: Response, next: NextFunction) {
    //
  }

  static async getCart(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user?.email || ""
      const data = await ProfileService.findCart(email);
      if (!data) res.status(404).json({ message: 'Not found' });
      res.json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async addToCart(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user?.email || ""
      const id = req.params.id;
      const updatedCart = await ProfileService.addToCart(email, id);
      res.json({ data: updatedCart});
    } catch (error) {
      next(error);
    }
  }

  static async updateCartItemQty(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user?.email || ""
      const id = req.params.id;
      const quantity = +(req.body.quantity ?? 1);
      const updatedCart = await ProfileService.updateCartItemQty(email, id, quantity);
      res.json({ data: updatedCart});
    } catch (error) {
      next(error);
    }
  }

  static async removeFromCart(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user?.email || ""
      const id = req.params.id;
      const updatedCart = await ProfileService.removeFromCart(email, id);
      res.json({ data: updatedCart});
    } catch (error) {
      next(error);
    }
  }
}