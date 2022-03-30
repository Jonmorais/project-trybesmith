import express from 'express';
import UserController from '../controllers/userController';
import validateUser from '../middlewares/userValidator';

const router = express.Router();

const userController = new UserController();

router.post('/', validateUser, userController.create);

export default router;
