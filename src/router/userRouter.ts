import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

const userController = new UserController();

router.post('/', userController.create);

export default router;
