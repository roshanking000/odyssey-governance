import { memo } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

import styles from './styles.module.scss';

type RoundIconLinkProps = {
  href: string;
  label: string;
  iconSrc: string;
  className?: string;
  classNameIcon?: string;
};

export const RoundIconLink = memo(({
  href, label, iconSrc, className, classNameIcon,
}: RoundIconLinkProps) => (
  <Link href={href} passHref legacyBehavior>
    <a href={href} className={cx(styles.roundIconLink_container, className)}>
      <div className={styles.roundIconLink_text}>{label}</div>
      <div className={cx(styles.roundIconLink_icon, classNameIcon)}>
        <Image src={iconSrc} alt="round icon" />
      </div>
    </a>
  </Link>
));
