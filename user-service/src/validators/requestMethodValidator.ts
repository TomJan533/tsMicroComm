import { Request, Response, NextFunction } from 'express';

export const validateMethod = (allowedMethods: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!allowedMethods.includes(req.method)) {
      return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
    next();
  };
};
