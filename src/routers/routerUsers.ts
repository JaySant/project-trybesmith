import { Router } from 'express';
import UsersController from '../controllers/users.controllers';

const usersController = new UsersController();
const router = Router();

router.post('/', usersController.createUsers.bind(usersController));

export default router;
