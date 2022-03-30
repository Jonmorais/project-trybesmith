import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import { IOrder } from '../interfaces/orderInterface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<object[]> {
    const orders = await this.model.getAll();

    const result = orders.map(({ orderId: id, userId, products }: IOrder): object => ({
      id,
      userId,
      products: JSON.parse(products), // products is string
    }));

    return result;
  }
}

export default OrderService;
