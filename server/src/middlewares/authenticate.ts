import { Request, Response, NextFunction, RequestHandler } from 'express';
import { verify } from 'jsonwebtoken';
import { ENV } from '../config/enviroment';
import { prisma } from '../config/database';

export const authenticate: RequestHandler = async (req: Request, res: Response, next: NextFunction)=> {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).send('Access token missing.'); return;
  }

  try {
    const payload = verify(token, ENV.JWT_SECRET) as { email: string };

    if (!payload.email) {
      res.status(401).send('Invalid token payload.'); return;
    }

    const user = await prisma.user.findUnique({
      where: { email: payload.email },
      select: { id: true, email: true, isAdmin: true },
    });

    if (!user) {
      res.status(401).send('User not found.'); return ;
    }

    req.user = {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    next();
  } catch (error) {
    res.status(401).send('Unauthorized.'); return;
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user || !req.user.isAdmin) {
    res.status(403).send('Admin access required.'); return;
  }
  next();
}