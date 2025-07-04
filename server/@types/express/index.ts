import express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        email: string;
        isAdmin: boolean;
        // add other fields if you want
      };
    }
  }
}