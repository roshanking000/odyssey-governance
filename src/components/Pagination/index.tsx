import React, {
  FC,
  memo,
  useCallback,
  useState,
} from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import cx from 'classnames';
import Image from 'next/image';

import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';
import { ArrowIcon } from 'assets';

import styles from './styles.module.scss';

interface PaginationProps {
  page?: number
  pageCount?: number
  className?: string
  classNamePagination?: string
  classNameDisabled?: string
  onChange?: (page: number) => void
  isHideMoveTo?: boolean;
}

export const Pagination: FC< PaginationProps > = memo(({
  page = 0,
  pageCount = 4,
  className,
  classNamePagination,
  onChange,
  classNameDisabled,
  isHideMoveTo = true,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [pageValue, setPageValue] = useState(page);

  const isSmallDesktop = useScreenWidth(ScreenWidth.smallDesktop);
  const handleChange = useCallback<Required<ReactPaginateProps>['onClick']>(({ nextSelectedPage, selected, isBreak }) => {
    let next = nextSelectedPage;

    if (isBreak && nextSelectedPage !== undefined) {
      if (nextSelectedPage > selected) {
        next = Math.floor((pageCount - 1 - selected) / 2 + selected);
      } else {
        next = Math.floor(selected / 2);
      }
    }

    if (onChange && next !== undefined) {
      onChange(next);
    }
  }, [onChange, pageCount]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {      
      event.preventDefault();
      const pageNumber = Number(inputValue);
  
      if (pageNumber >= 1 && pageNumber <= pageCount) {
        if (onChange) onChange(pageNumber - 1);
        setPageValue(pageNumber - 1);
        setInputValue('');
      } else if (pageNumber > pageCount && onChange) {
        if (onChange) onChange(pageNumber - 1);
        setPageValue(pageNumber - 1);
        setInputValue(`${pageCount}`);
      } else if (pageNumber < 1 && onChange) {
        if (onChange) onChange(pageNumber - 1);
        setPageValue(pageNumber - 1);
        setInputValue(`${1}`);
      }
    }
  };

  return (
    <div className={cx(styles.pagination_container, className)}>
      <ReactPaginate
        forcePage={pageValue}
        onClick={handleChange}
        pageCount={pageCount || 0}
        pageRangeDisplayed={isSmallDesktop ? 2 : 3}
        marginPagesDisplayed={10}
        className={cx(styles.pagination, classNamePagination)}  
        breakClassName={styles.break}
        breakLinkClassName={styles.break_line}
        activeLinkClassName={styles.page_active}
        pageLinkClassName={styles.page}
        nextLinkClassName={cx(styles.arrow_button, styles.next_arrow)}
        previousLinkClassName={cx(styles.arrow_button, styles.prev_arrow)}
        disabledLinkClassName={cx(styles.disabled, classNameDisabled)}
        renderOnZeroPageCount={() => null}
        nextLabel={(
          <Image
            src={ArrowIcon}
            width={21}
            height={20}
            alt="copy"
          />
        )}
        previousLabel={(
          <Image
            src={ArrowIcon}
            width={21}
            height={20}
            alt="copy"
          />
        )}
      />
      <div className={cx(styles.pagination_panel, className)} />

      {(!isSmallDesktop && !isHideMoveTo) && (
        <div className={styles.move_to}>
          Move to
          <input
            type="number"
            min="1"
            max={pageCount}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyPress}
            className={styles.move_to_input}
          />
          page
        </div>
      )}
    </div>
  );
});
