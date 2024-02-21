import React, { FC } from 'react';
import cx from 'classnames';
import { Typography } from 'components';
import styles from './styles.module.scss';

type Props = {
  children?: React.ReactNode,
  footerCard?: React.ReactNode,
  title?: string,
  className?: string,
  classNameHeader?: string,
  classNameContent?: string,
  classNameFooter?: string,
  theme?: 'obscure' | 'imperceptible',
};

export const Card: FC<Props> = ({
  theme = 'obscure',
  children,
  title,
  className,
  classNameHeader,
  classNameContent,
  classNameFooter,
  footerCard,
}) => (
  <div
    className={cx(
      styles.card_container,
      styles[`card_container_${theme}`],
      className,
    )}
  >
    <div className={cx(styles.card_container_header, classNameHeader)}>
      {title && (
      <Typography type="p" className={styles.card_title}>
        {title}
      </Typography>
      )}
    </div>
    <div className={cx(styles.card_content, classNameContent)}>
      {children}
    </div>
    {footerCard &&
      (
      <div className={cx(styles.card_footer, classNameFooter)}>
        {footerCard}
      </div>
      )}
  </div>
);
