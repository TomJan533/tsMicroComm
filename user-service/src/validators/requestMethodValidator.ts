import { Request, Response, NextFunction } from 'express';

export const validateMethod = (allowedMethods: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!allowedMethods.includes(req.method)) {
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
      return;
    }
    next();
  };
};
