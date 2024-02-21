import React, { FC, memo } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type ProgressBarProps = {
  progress: number;
  description?: string;
  value?: string,
  className?: string;
};

export const ProgressBar: FC<ProgressBarProps> = memo(({
  progress = 0,
  description,
  value,
  className,
}) => {
  const percentage = Math.min(Math.max(progress, 0), 100);
  return (
    <div className={styles.progress_bar_container}>
      <p className={styles.description}> 
        {description} 
      </p>
      
      <div className={cx(styles.progress_bar, className)}>
        <div
          className={cx(styles.progress_bar, {
            [styles.complete]: percentage === 100,
          })}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className={cx(styles.progress_bar_bottom)}>
        <div className={styles.progress_value}>{value}</div>
        <div className={styles.progress}>{`${percentage}%`}</div>
      </div>
    </div>
  );
});
