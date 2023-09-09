import { IExchangeRateResponse } from './exchange-rates.interfaces';

const exchangeRatesApiUrl = 'https://api.exchangerate.host/local';

export const fetchExchangeRates = (): Promise<IExchangeRateResponse> => {
  try {
    return fetch(exchangeRatesApiUrl).then((res) => res.json());
  } catch (error) {
    throw new Error('Failed to load exchange rates');
  }
};
