import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/auth.service';

export default class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;
      const newUser = await AuthService.register(dto);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;
      const user = await AuthService.login(dto);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async getInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user?.email || ""
      const user = await AuthService.findInfo(email);
      if (!user) res.status(404).json({ message: 'Not found' });
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}