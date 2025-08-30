
import { Prisma } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

export class APIError extends Error {
  public status: number;

  constructor(message = "Internal Server Error", status = 500) {
    super(message);
    this.status = status;
  }
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  switch (true) {
    case (err instanceof APIError): {
      return res.status(err.status).send({ message: err.message })
    }

    case (err instanceof Prisma.PrismaClientValidationError): {
      const details = err.message.split("\n").pop()?.trim();
      return res.status(404).json({ message: `Validation Error: ${details}` });
    }

    default: {
      return res.status(500).json({ message: err.message || 'Internal Server Error', });
    }
  }
}

export default errorHandler;