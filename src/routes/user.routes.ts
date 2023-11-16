import { Router, Response, Request } from 'express';
import { UserController } from '../controllers/User';

const router = Router();

const userController = new UserController();

router.post('/', (req: Request, res: Response) => userController.createUser(req, res));

// router.delete('/', async (req: Request, res: Response) => {
//   try {
//     const { email } = req.query;
//     if (email) {
//       const user = await CreateUser.deleteUser(email.toString());
//       return res.json({ user });
//     }
//   } catch (error) {
//     return res.status(500).json({ error });
//   }
// });

export default router;