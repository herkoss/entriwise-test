import { NOT_AVAILABLE } from '../constants';

const MONTHS: Record<number, string> = {
  0: 'JAN',
  1: 'FEB',
  2: 'MAR',
  3: 'APR',
  4: 'MAY',
  5: 'JUN',
  6: 'JUL',
  7: 'AUG',
  8: 'SEP',
  9: 'OCT',
  10: 'NOV',
  11: 'DEC',
};

const DATE_NUMBER_PREFIX = '0';

const convertDateNumber = (dateNumber: number): string => {
  if (dateNumber < 10) {
    return DATE_NUMBER_PREFIX.concat(dateNumber.toString());
  }

  return dateNumber.toString();
};

export const convertDate = (fullDate: string | null): string => {
  if (fullDate === null) {
    return NOT_AVAILABLE;
  }

  const newFullDate = new Date(fullDate);
  const date = convertDateNumber(newFullDate.getDay());
  const month = MONTHS[newFullDate.getMonth()];

  return month.concat(date);
};
