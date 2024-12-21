import express, { Request, Response } from 'express';

const router = express.Router();


router.post('/createUser', (req: Request, res: Response) => {
   res.json({ message: 'createUser' });
});

router.get('/getUsers', (req: Request, res: Response) => {
    res.json({ message: 'getUsers' });
 });

router.put('/updateUser', (req: Request, res: Response) => {
    res.json({ message: 'updateUser' });
});

router.delete('/deleteUser', (req: Request, res: Response) => {
    res.json({ message: 'deleteUser' });
});

export default router;
