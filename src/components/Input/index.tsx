import { 
  ChangeEvent, RefObject, memo, useCallback, useMemo, 
} from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { useSetFocus } from 'hooks';
import { GlassIcon } from 'assets/img';
import styles from './styles.module.scss';

type InputProps = {
  value: string
  defaultValue?: string
  name?: string
  isPassword?: boolean
  label?: string
  classNameInput?: string
  classNameLabel?: string
  classNameContainer?: string
  disabled?: boolean
  autoFocus?: boolean
  isWithClear?: boolean
  onChangeValue?: (text: string, name?: string) => void
  placeholder?: string
  isTextOnly?: boolean
  isNumberOnly?: boolean
  isSearch?: boolean
  onSearchClick?: ()=> void
  onClick?: ()=> void
  ref?: RefObject<HTMLInputElement>
  error?: string,
};

export const Input = memo<InputProps>(
  ({
    value,
    defaultValue,
    name,
    label,
    classNameInput,
    classNameLabel,
    classNameContainer,
    disabled = false,
    autoFocus = false,
    onChangeValue,
    placeholder = '',
    isNumberOnly,
    isPassword,
    isSearch,
    onSearchClick,
    onClick,
    ref,
    error,
  }) => {
    const { ref: refRaw, setFocus } = useSetFocus();

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeValue !== undefined) {
          onChangeValue(e.target.value, name);
        }
      },
      [onChangeValue, name],
    );

    const pattern = isNumberOnly ? '^[0-9]*' : undefined;
    
    const typeInput = useMemo(() => {
      switch (true) {
        case isPassword:
          return 'password';
        case isNumberOnly:
          return 'number';
        default:
          return 'text';
      }
    }, [isPassword, isNumberOnly]);

    return (
      <div className={cx(styles.input__container, classNameContainer)}>
        {label && (
        <div
          className={cx(styles.input__label, classNameLabel)}
          onClick={setFocus}
          onKeyPress={undefined}
          role="button"
          tabIndex={0}
        >
          {label}
        </div>
        )}
        <div className={cx(styles.input__box, {
          [styles.input__box_error]: !!error,
        })}
        >
          {isSearch && (
            <button className={styles.glass} onClick={onSearchClick}>
              <Image src={GlassIcon} width={16} height={16} alt="glass icon" />
            </button>
          )}
          <input
            ref={refRaw || ref}
            pattern={pattern}
            name={name}
            value={value}
            type={typeInput}
            className={cx(classNameInput, styles.input, {
              [styles.input_search]: isSearch,
            })}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={handleChange}
            placeholder={placeholder}
            min={isNumberOnly ? 0 : undefined}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            onClick={onClick}
          />
        </div>
      </div>
    );
  },
);
