import Image from 'next/image';
import { LoadingIcon } from 'assets';
import styles from './styles.module.scss';

export const Loader = () => (
  <div className={styles.loading__container}>
    <Image
      src={LoadingIcon.src}
      alt="spinner"
      width={40}
      height={40}
      className={styles.loading__image}
    />
  </div>
);
