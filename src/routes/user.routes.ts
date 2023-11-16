import { Request, Router, Response } from 'express';
import User from '../models/User';

const router = Router();

const CreateUser = new User();

router.get('/', (req: Request, res: Response) => {
  const { email, name} = req.body;
  const user = CreateUser.createUser({ email, name });
  return res.json({ user });
});

export default router;