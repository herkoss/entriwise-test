export interface IOrder {
  itemId: string;
  orderId: string;
  date: string | null;
}

export interface IOrdersResponse {
  orders: Array<IOrder>;
}
