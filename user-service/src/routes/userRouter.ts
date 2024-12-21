import express, { Request, Response } from 'express';
import { validateMethod } from '../validators/requestMethodValidator';

const router = express.Router();

router.all('/createUser', validateMethod(['POST']), (req: Request, res: Response) => {
   res.json({ message: 'createUser' });
});

router.all('/getUsers', validateMethod(['GET']), (req: Request, res: Response) => {
    res.json({ message: 'getUsers' });
 });

router.all('/updateUser', validateMethod(['PUT']), (req: Request, res: Response) => {
    res.json({ message: 'updateUser' });
});

router.all('/deleteUser', validateMethod(['DELETE']), (req: Request, res: Response) => {
    res.json({ message: 'deleteUser' });
});

export default router;
