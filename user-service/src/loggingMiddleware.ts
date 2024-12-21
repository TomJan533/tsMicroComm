import { Request, Response, NextFunction } from 'express';
import logger from  './logger';

export function logRequests(req: Request, res: Response, next: NextFunction) {
    logger.info(`Request on ${req.method} ${req.path}`);
    next();
}

export function errorLogger(err: Error, req: Request, res: Response, next: NextFunction) {
    logger.error(`Error in ${req.method} ${req.path}: ${err.message}`);
    next(err);
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: 'Internal Server Error' });
}
