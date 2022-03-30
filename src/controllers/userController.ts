import { Request, Response } from 'express';
import UserService from '../services/userServices';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const newUser = await this.userService.create(user);

    return res.status(201).json(newUser);
  };
}

export default UserController;
