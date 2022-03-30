import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/userInterface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<number> {
    const { username, password, classe, level } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, password, classe, level) VALUES (?, ?, ?, ?)',
      [username, password, classe, level],
    );

    const { insertId } = result;

    return insertId;
  }
}

export default UserModel;
