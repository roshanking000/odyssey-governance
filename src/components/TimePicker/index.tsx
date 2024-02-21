import React, { FC, useState } from 'react';
import TimePickerRaw from 'rc-time-picker';
import cx from 'classnames';
import moment, { Moment } from 'moment';

import styles from './styles.module.scss';

interface TimePickerProps {
  className?: string
  onChangeValue?: (newValue: Moment) => void;
  value?: Moment;
  error?: boolean;
}

export const TimePicker: FC<TimePickerProps> = ({
  className = '',
  onChangeValue,
  value,
  error = false,
}) => {
  const [open, setOpen] = useState({ open: false });
  const now = moment.utc();

  const disabledHours = () => {
    const hours = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < now.hour(); i++) {
      hours.push(i);
    }
    return hours;
  };

  const disabledMinutes = (selectedHour: number) => {
    const minutes = [];
    if (selectedHour === now.hour()) {
    // eslint-disable-next-line no-plusplus
      for (let i = 0; i < now.minute(); i++) {
        minutes.push(i);
      }
    }
    return minutes;
  };

  const disabledSeconds = () => [];

  return (
    <TimePickerRaw
      defaultValue={moment()}
      showSecond={false}
      open={open.open}
      onOpen={setOpen}
      onClose={setOpen}
      focusOnOpen
      onChange={onChangeValue}
      value={value}
      className={cx(className, {
        [styles.error]: error,
      })}
      placeholder="00:00"
      disabledHours={disabledHours}
      disabledMinutes={disabledMinutes}
      disabledSeconds={disabledSeconds}
    />
  );
};
