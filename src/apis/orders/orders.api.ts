import { IOrdersResponse } from './orders.interface';

const ordersApiUrl = 'https://api-staging.entriwise.com/mock/test-task-orders';

export const fetchOrders = (): Promise<IOrdersResponse> => {
  try {
    return fetch(ordersApiUrl).then((res) => res.json());
  } catch (error) {
    throw new Error('Failed to load orders');
  }
};
