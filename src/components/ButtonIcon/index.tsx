import { memo, MouseEvent } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { LoadingIcon } from 'assets';
import styles from './styles.module.scss';

type ButtonIconProps = {
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  classNameIsDisabled?: string;
  width?: number;
  height?:number;
  image: {
    src: string,
    width: number,
    height: number,
  };
};

const ButtonIcon = memo(({
  onClick,
  className = '',
  isDisabled = false,
  isLoading = false,
  classNameIsDisabled = '',
  image,
  width,
  height,
}: ButtonIconProps) => (
  <button
    className={cx(
      styles.button_icon__container,
      {
        [styles.button_icon__loading]: isLoading,
        [styles.button_icon__disabled]: isDisabled,
        [classNameIsDisabled]: isDisabled,
      },
      className,
    )}
    onClick={isDisabled ? () => {} : onClick}
    disabled={isDisabled}
  >
    <Image
      src={isLoading ? LoadingIcon.src : image.src}
      alt="button icon"
      width={width || image.width}
      height={height || image.height}
    />
  </button>
));

export { ButtonIcon };
