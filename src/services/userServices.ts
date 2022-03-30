import connection from '../models/connection';
import UserModel from '../models/userModels';
import User from '../interfaces/userInterface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<User> {
    await this.model.create(user);

    return { ...user };
  }
}

export default UserService;
