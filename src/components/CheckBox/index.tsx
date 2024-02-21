import { ChangeEventHandler, memo } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export type CheckBoxProps = {
  onChange: ChangeEventHandler<HTMLInputElement>,
  description?: string,
  checked: boolean,
  isDisabled?: boolean,
  className?: string,
  classNameContainer?: string,
};

const CheckBox = memo<CheckBoxProps>(({
  onChange,
  description = '',
  checked, 
  isDisabled, 
  className, 
  classNameContainer,
}) => (
  <div className={cx(styles.container, classNameContainer)}>
    <label className={cx(styles.checkContainer, className)}>
      <input 
        className={cx(
          styles.input_checkbox,
          { [styles.input_checkbox_disabled]: isDisabled },
        )}
        onChange={onChange} 
        type="checkbox" 
        checked={checked} 
        disabled={isDisabled} 
      />
      <span className={styles.checkmark} />
    </label>
    <div className={cx(
      styles.description,
      { [styles.description_checked]: checked },
      { [styles.description_disabled]: isDisabled },
    )}
    > 
      {description} 
    </div>
  </div>
));

export { CheckBox };
