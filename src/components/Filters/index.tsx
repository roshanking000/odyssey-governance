import { FC, memo } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export type FilterType = {
  label: string;
  value: string
};

type FiltersProps = {
  filters: FilterType[];
  setActiveFilter: (value?: FilterType) => void;
  activeFilter?: FilterType;
  className?: string;
};

export const Filters: FC<FiltersProps> = memo(
  ({
    className,
    setActiveFilter,
    activeFilter,
    filters,
  }) => {
    const handleClick = (clickedFilter: FilterType) => {
      if (activeFilter?.label === clickedFilter.label) {
        setActiveFilter(undefined);
      } else {
        setActiveFilter(clickedFilter);
      }
    };

    return (
      <div className={cx(styles.filters__container, className)}>
        {filters.map(({ value, label }) => (
          <button
            className={cx(
              styles.filter,
              { [styles.active]: activeFilter?.label === label },
            )}
            key={`filter_${label}`}
            onClick={() => handleClick({ value, label })}
          >
            {label}
          </button>
        ))}
      </div>
    );
  },
);
