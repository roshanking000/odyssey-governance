import { decimalPlaces } from 'appConstants';
import BigNumber from 'bignumber.js';

export const formatBalance = (balance: string, decimals?: string | number) => 
  new BigNumber(balance ?? 0)
    .div(new BigNumber(10).pow(decimals ?? 18))
    .decimalPlaces(decimalPlaces)
    .toString();
