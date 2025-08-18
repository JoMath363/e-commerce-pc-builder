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
}