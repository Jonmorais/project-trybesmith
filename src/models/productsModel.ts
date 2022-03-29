import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/productInterface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Products');

    const [rows] = result;
    return rows as Product[];
  }

  public async create(product: Product): Promise<number> {
    const { name, amount } = product;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = result;

    return insertId;
  }
}

export default ProductModel;
