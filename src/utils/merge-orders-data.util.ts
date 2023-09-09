import { IRates, Currencies } from '../apis/exchange-rates/exchange-rates.interfaces';
import { IItem } from '../apis/items/items.interface';
import { IOrder } from '../apis/orders/orders.interface';
import { NOT_AVAILABLE } from '../constants';
import { convertDate } from './date.util';

export enum MergedDataKeys {
  itemName = 'itemName',
  orderID = 'orderID',
  orderDate = 'orderDate',
  amount = 'amount',
}

export interface IMergedData {
  [MergedDataKeys.itemName]: string;
  [MergedDataKeys.orderID]: string;
  [MergedDataKeys.orderDate]: string;
  [MergedDataKeys.amount]: string;
}

const calculateAmount = (itemExchangeRate: number | null, itemAmount: number | null, usdToEurExchangeRate: number) => {
  if (itemExchangeRate !== null && itemAmount !== null) {
    return Math.trunc((itemAmount * itemExchangeRate) / usdToEurExchangeRate).toString();
  }

  return NOT_AVAILABLE;
};

export const mergeOrdersData = (
  items: Array<IItem>,
  orders: Array<IOrder>,
  exchangeRates: IRates,
): Array<IMergedData> => {
  const result: Array<IMergedData> = [];
  const usdToEurExchangeRate = exchangeRates[Currencies.USD];

  for (const order of orders) {
    const item = items.find((item) => item.itemId === order.itemId);

    if (item !== undefined) {
      const itemExchangeRate = item.currency === null ? null : exchangeRates[item.currency];
      const amount = calculateAmount(itemExchangeRate, item.amount, usdToEurExchangeRate);
      const convertedOrderDate = convertDate(order.date);

      result.push({
        amount,
        orderID: order.orderId,
        orderDate: convertedOrderDate,
        itemName: item.itemName,
      });
    } else {
      result.push({
        orderID: NOT_AVAILABLE,
        orderDate: NOT_AVAILABLE,
        amount: NOT_AVAILABLE,
        itemName: NOT_AVAILABLE,
      });
    }
  }

  return result;
};
