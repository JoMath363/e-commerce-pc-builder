import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { ENV } from '../config/enviroment';
import { prisma } from '../config/database';

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

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
      select: { email: true, isAdmin: true },
    });

    if (!user) {
      res.status(401).send('User not found.'); return ;
    }

    req.user = {
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