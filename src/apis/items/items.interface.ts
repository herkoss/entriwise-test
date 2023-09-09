import { Currencies } from '../exchange-rates/exchange-rates.interfaces';

export interface IItem {
  itemId: string;
  itemName: string;
  amount: number | null;
  currency: Currencies | null;
}

export interface IItemsResponse {
  items: Array<IItem>;
}
