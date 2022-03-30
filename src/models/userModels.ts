import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/userInterface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<number> {
    const { username, classe, level } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level) VALUES (?, ?, ?)',
      [username, classe, level],
    );

    const { insertId } = result;

    return insertId;
  }
}

export default UserModel;
