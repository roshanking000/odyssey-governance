import { useMemo } from 'react';
  
const columns = [
  {
    id: 1,
    accessor: '1',
  },
  {
    id: 2,
    accessor: '2',
  },
];

export const useColumns = () =>
  useMemo(() => columns, []);
