import React, { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import { SunIcon } from 'assets';

import styles from './styles.module.scss';

export const ThemeSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleColorMode = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className={styles.themeSwitch_container}>
      <input
        type="checkbox"
        className={styles.input}
        checked={isChecked}
        onChange={toggleColorMode}
      />
      <button
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        className={styles.button}
      >
        <div className={cx(styles.ball, {
          [styles.active]: isChecked,
        })}
        >
          {isChecked ? (
            <span className={styles.icon}>
              <Image
                src={SunIcon}
                alt="Sun Icon"
                width={14}
                height={14}
              />
            </span>
          ) : <span className={styles.icon}>I</span>}
        </div>
      </button>
    </label>
  );
};
