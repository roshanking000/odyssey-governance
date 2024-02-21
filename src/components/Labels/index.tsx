import { FC, memo, useMemo } from 'react';
import cx from 'classnames';
import Image from 'next/image';
import { 
  checkMark, ClockIcon, StopIcon, PercentIcon, 
} from 'assets';
import styles from './styles.module.scss';

type LabelsProps = {
  className?: string;
  classNameText?: string;
  classNameImage?: string;
  children: React.ReactNode | string;
  image?: {
    src: string,
    width: number,
    height: number,
  };
  theme?: 'default' | 'red' | 'green' | 'orange',
  useStandardImage?: boolean,
};

const Labels: FC<LabelsProps> = memo(
  ({
    theme = 'default',
    className = '',
    classNameText = '',
    classNameImage = '',
    children,
    useStandardImage = true,
    image,
  }: LabelsProps) => {
    function getStandardIco(usedTheme:string) {
      switch (usedTheme) {
        case 'default':
          return PercentIcon;
        case 'green':
          return checkMark;
        case 'orange':
          return ClockIcon;
        case 'red':
          return StopIcon;
        default:
          break;
      }
    }

    const standardIco = useMemo(() => getStandardIco(theme), [theme]);

    return (
      <label
        className={cx(
          styles.label__container,
          styles[`${theme}__container`],
          className,
        )}
      >
        <div
          className={cx(
            styles[`${theme}__text`],
            classNameText,
          )}
        >
          { children}
        </div>
  
        { (image || useStandardImage || classNameImage) && (
          <div className={cx(
            styles.icon,
            classNameImage,
          )}
          >
            <Image
              src={image ? image.src : standardIco.src} 
              width={image ? image.width : standardIco.width}
              height={image ? image.height : standardIco.height}
              alt="icon"
            />
          </div>
        )}
      </label>
    );
  },
);

export { Labels };
