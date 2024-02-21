import { parseISO, format } from 'date-fns';

export const formatDateFromTimestamp = (timestamp: number | string | undefined): string => {
  if (!timestamp) return '';
  const date = new Date(Number(timestamp) * 1000);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${year}-${month}-${day}`;
};

export const formatDate = (date: Date) => {
  const isoDateString = date.toISOString();
  const dateObject = new Date(isoDateString);
  const day = String(dateObject.getUTCDate()).padStart(2, '0');
  const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0');
  const year = dateObject.getUTCFullYear();
  return `${year}/${month}/${day}`;
};

export const formatIsoDate = (date: string) => {
  try {
    return (date !== '' ? format(parseISO(date), 'MM/dd/yyyy HH:mm X') : '');
  } catch {
    return '';
  }
};
