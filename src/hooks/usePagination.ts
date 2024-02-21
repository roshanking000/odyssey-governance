/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';

export const usePagination = (page:number, numberEl:number, elements:Array<object>) => {
  const pageCount = useMemo(
    () => Math.ceil(elements.length / numberEl),
    [elements, numberEl],
  ); 

  const paginatedEl = useMemo(
    () => 
      elements.filter((el, i) => 
        i < numberEl * (page + 1) &&
        i >= numberEl * page),
    [elements, page, numberEl],
  );

  return {
    pageCount, 
    paginatedEl,
  };
};
