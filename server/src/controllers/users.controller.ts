import { Request, Response, NextFunction } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UsersService.findAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  static async getByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.params.email;
      const user = await UsersService.findByEmail(email);
      if (!user) res.status(404).json({ message: 'Not found' });
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async updateByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const updatedUser = await UsersService.update(data);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  static async deleteByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.params.email;
      await UsersService.delete(email);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}