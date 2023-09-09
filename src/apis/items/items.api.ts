import { IItemsResponse } from './items.interface';

const itemsApiUrl = 'https://api-staging.entriwise.com/mock/test-task-items';

export const fetchItems = (): Promise<IItemsResponse> => {
  try {
    return fetch(itemsApiUrl).then((res) => res.json());
  } catch (error) {
    throw new Error('Failed to load items');
  }
};
