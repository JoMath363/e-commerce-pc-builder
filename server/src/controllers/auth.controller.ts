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
      console.log(dto);

      const user = await AuthService.login(dto);

      res.cookie("token", user.accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      });

      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      res.clearCookie("token");
      res.json({ message: "Logged out" });
    } catch (error) {
      next(error);
    }
  }
}