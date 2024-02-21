import { FC, memo } from 'react';
import cx from 'classnames';
import Image from 'next/image';
import { LoadingIcon } from 'assets';
import styles from './styles.module.scss';

type ButtonProps = {
  onClick: () => void;
  className?: string;
  classNameText?: string;
  classNameImage?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  classNameIsDisabled?: string;
  children: React.ReactNode | string;
  image?: {
    src: string,
    width: number,
    height: number,
  };
  theme?: 'gray' | 'primary' | 'gray_long' | 'primary_long' | 'orange' | 'red' | 'green';
};

const Button: FC<ButtonProps> = memo(
  ({
    onClick,
    theme = 'primary',
    className = '',
    classNameText = '',
    classNameIsDisabled = '',
    classNameImage = '',
    isDisabled = false,
    isLoading,
    loadingText = 'Loading...',
    children,
    image,
  }: ButtonProps) => (
    <button
      className={cx(
        styles.button__container,
        styles[`${theme}__container`],
        {
          [styles.button__disabled]: isDisabled,
          [styles[`${theme}__disabled`]]: isDisabled,
          [classNameIsDisabled]: isDisabled,
          [styles.is_loading]: isLoading,
        },
        className,
      )}
      onClick={isDisabled || isLoading ? undefined : onClick}
      disabled={isDisabled}
    >
      {isLoading ? (
        <div className={styles.loading__container}>
          <Image
            src={LoadingIcon.src}
            alt="spinner"
            width={20}
            height={20}
            className={styles.loading__image}
          />
          <div 
            className={cx(styles.default__text_disabled, styles.loading__text)}
          >
            {loadingText}
          </div>
        </div>
      ) : (
        <div
          className={cx(
            styles[`${theme}__text`],
            classNameText,
            { [styles[`${theme}__text_disabled`]]: isDisabled },
          )}
        >
          { !isLoading && children}
        </div>
      )}
      {image && (
        <div className={cx(
          styles.icon,
          classNameImage,
        )}
        >
          <Image
            src={image.src} 
            width={image.width}
            height={image.height}
            alt="image"
          />
        </div>
      )}
    </button>
  ),
);

export { Button };
