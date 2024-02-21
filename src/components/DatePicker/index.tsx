/* eslint-disable react/no-unstable-nested-components */
import React, {
  FC, useState, forwardRef, useCallback, useRef, memo, useEffect, LegacyRef, RefObject, 
} from 'react';
import DatePickerRaw from 'react-datepicker';
import cx from 'classnames';

import { formatDate } from 'utils';
import { Input } from 'components';

import styles from './styles.module.css';

interface DatePickerProps {
  className?: string;
  value?: Date;
  minDate?: Date;
  maxDate?: Date;
  onChangeValue?: (date: Date) => void;
  error?: string;
  label?: string;
}

export type InputRef = LegacyRef<HTMLInputElement> | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ExampleCustomInput = forwardRef<HTMLInputElement, any>(
  (
    {
      value, onClick, label, error,
    }, 
    ref,
  ) => (
    <Input
      label={label}
      value={value}
      onClick={onClick}
      ref={ref as RefObject<HTMLInputElement>}
      classNameLabel={styles.label}
      placeholder="YYYY/MM/DD"
      error={error}
    />
  ),
);

export const DatePicker: FC<DatePickerProps> = memo(({
  className = '',
  onChangeValue,
  value,
  label,
  error,
  minDate,
  maxDate,
}) => {
  const [selectDate, setSelectDate] = useState<Date | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const onChange = useCallback((date: Date | null) => {
    setSelectDate(date);
    if (onChangeValue && date) {
      onChangeValue(date);
    }
  }, [onChangeValue]);

  useEffect(() => {
    if (value) {
      setSelectDate(value);
    }
  }, [value]);

  return (
    <div className={cx(styles.datePicker, className)}>
      <DatePickerRaw 
        customInput={<ExampleCustomInput ref={inputRef} label={label} error={error} />}
        selected={selectDate} 
        onChange={onChange}
        value={selectDate ? formatDate(selectDate) : undefined}
        placeholderText="YYYY/MM/DD"
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
});
