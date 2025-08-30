
import { Prisma } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (err instanceof Prisma.PrismaClientValidationError) {
    const details = err.message.split("\n").pop()?.trim();

    return res.status(400).json({
      message: `Validation Error: ${details}`,
    });
  }

  return res.status(500).json({
    message: err.message || 'Internal Server Error',
  });
}

export default errorHandler;