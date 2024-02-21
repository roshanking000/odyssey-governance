import React, { FC, ReactNode } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { PrimaryArrow } from 'assets';
import styles from './styles.module.scss';

interface LinkProps {
  className?: string,
  href: string,
  children: ReactNode,
  needArrow?: boolean,
}

export const Link: FC<LinkProps> = ({ 
  className = '', children, href, needArrow = true,
}) => (
  <a href={href} target="_self" rel="noreferrer" className={cx(styles.link, className)}>
    {needArrow && <Image src={PrimaryArrow} width={20} height={20} alt="need arrow" />}
    {children}
  </a>
);
