export * from './api';
export * from './contracts';
export * from './routes';
export * from './notifications';
export * from './network';

export const decimalPlaces = 6;
export const decimalPlacesForFee = 8;

export const addressZero = '0x0000000000000000000000000000000000000000';

export const frontUrl = process.env.NEXT_PUBLIC_FRONT_URL as string;

export enum ScreenWidth {
  smallDesktop = 912,
  tablet = 768,
  mobile = 576,
}

export const votingFilters = [
  {
    value: 'voteNow',
    label: 'Vote now', 
  },
  {
    value: 'soon',
    label: 'Soon',
  },
  {
    value: 'closed',
    label: 'Closed',
  },
];

export const isBrowser = typeof window !== 'undefined';
