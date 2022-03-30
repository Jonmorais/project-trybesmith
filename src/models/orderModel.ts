import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/orderInterface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const result = await this.connection.execute<RowDataPacket[]>(
      `SELECT Trybesmith.Products.orderId, Trybesmith.Orders.userId, 
      CONCAT('[',GROUP_CONCAT(Trybesmith.Products.id),']') AS products FROM Trybesmith.Products 
      INNER JOIN Trybesmith.Orders ON Trybesmith.Products.orderId = Trybesmith.Orders.id 
      GROUP BY Trybesmith.Products.orderId ORDER BY Trybesmith.Orders.userId, 
      COUNT(Trybesmith.Products.orderId)`,
    );

    const [rows] = result;

    return rows as IOrder[];
  }
}

export default OrderModel;
