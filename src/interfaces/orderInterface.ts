interface Order {
  id: number,
  userid: number,
  products: number[],
}

interface IOrder {
  orderId: number,
  userId: number,
  products: string,
}

export { Order, IOrder };
