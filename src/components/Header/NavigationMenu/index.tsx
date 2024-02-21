import { FC } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import { ArrowBottomIcon } from 'assets';
import styles from './styles.module.scss';

interface Subitems {
  title: string;
  href: string;
  isActive: boolean;
}

interface NavigationMenuProps {
  title: string;
  isActive: boolean;
  subitems: Subitems[];
}

export const NavigationMenu: FC<NavigationMenuProps> = ({
  title, isActive, subitems,
}) => (
  <div className={styles.navigationMenu__container}>
    <button
      className={cx(styles.navigationMenu__item, {
        [styles.active]: isActive,
      })}
    >
      {title}
      <Image src={ArrowBottomIcon} className={styles.navigationMenu__item_icon} alt="arrow icon" />
    </button>

    <div className={styles.navigationMenu__list}>
      {subitems.map(({ title: subTitle, href, isActive: isSubActive }) => (
        <a
          key={`subitem_${subTitle}`}
          href={href}
          style={{ display: 'block', textDecoration: 'none' }}
          className={cx(styles.navigationMenu__list_item, {
            [styles.active]: isSubActive,
          })}
        >
          {subTitle}
        </a>
      ))}
    </div>
  </div>
);
