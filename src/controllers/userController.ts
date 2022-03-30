import { Request, Response } from 'express';
import UserService from '../services/userServices';
import jwtGenerator from '../middlewares/jwtGenerator';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const newUser = await this.userService.create(user);

    const token = jwtGenerator({
      username: newUser.username,
      classe: newUser.classe,
    });

    return res.status(201).json({ token });
  };
}

export default UserController;
