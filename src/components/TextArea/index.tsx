import React, {
  ChangeEvent,
  memo,
  useCallback,
  FC,
} from 'react';
import cx from 'classnames';

import { useAutosize } from 'hooks';

import styles from './styles.module.scss';

type TextAreaProps = {
  autoSize?: boolean;
  isDisabled?: boolean;
  value?: string;
  classNameContainer?: string;
  onChangeValue?: (text: string) => void;
  maxLength?: number;
  placeholder?: string;
  errorId?: string;
  errors?: string[];
};

const TextArea: FC<TextAreaProps> = memo<TextAreaProps>(({
  autoSize,
  isDisabled,
  value,
  onChangeValue,
  maxLength,
  classNameContainer,
  placeholder,
  ...props
}) => {
  const ref = useAutosize(!!autoSize);

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChangeValue !== undefined) {
      onChangeValue(e.target.value);
    }
  }, [onChangeValue]);
  return (
    <div className={styles.container}> 
      <textarea
        {...props}
        ref={ref}
        maxLength={maxLength}
        disabled={isDisabled}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={cx(
          styles.textarea__container, 
          classNameContainer,
        )}
      />
    </div>
    
  );
});

export { TextArea };
