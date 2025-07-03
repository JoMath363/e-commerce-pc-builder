import { Request, Response, NextFunction } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await UsersService.findAll();
      res.json(items);
    } catch (error) {
      next(error);
    }
  }

  static async getByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const item = await UsersService.findByEmail(id);
      if (!item) res.status(404).json({ message: 'Not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedItem = await UsersService.update(data);
      res.json(updatedItem);
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      await UsersService.delete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;
      const newUser = await UsersService.register(dto);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;
      const user = await UsersService.login(dto);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}