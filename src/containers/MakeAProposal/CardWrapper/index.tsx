import { ReactNode } from 'react';
import cx from 'classnames';

import { Typography } from 'components';

import styles from './styles.module.scss';

interface CardWrapperProps {
  className?: string;
  classNameContent?: string;
  title: string;
  children: ReactNode;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({ 
  className, classNameContent, title, children,
}) => (
  <div className={cx(styles.card_wrapper, className)}>
    <Typography type="h3" className={styles.title}>
      {title}
    </Typography>
    <div className={cx(styles.content, classNameContent)}>
      {children}
    </div>
  </div>
);
