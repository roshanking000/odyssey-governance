/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo, useCallback, useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Typography } from '../Typography';

type Tab = {
  key: string,
  label: string,
  component?: React.ReactNode,
};

type TabsProps = {
  tabs: Tab[],
  theme: 'line' | 'frame',
  defaultKey: string,
  className?: string,
  panelClassName?: string,
  labelClassName?: string,
  componentClassName?: string,
  rightElement?: React.ReactNode,
};

const Tabs = memo(({
  defaultKey,
  tabs,
  theme = 'line',
  className,
  panelClassName,
  labelClassName,
  componentClassName,
  rightElement,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultKey);

  const onClickTab = useCallback((key: string) => {
    setActiveTab(key);
  }, []);

  return (
    <div className={cx(styles.tabs_container, className)}>
      <div className={styles.tabs_head}>
        <nav className={cx(styles[`${theme}_tabs__panel_container`], panelClassName)}>
          {tabs.map(({ key, label }) => (
            <div
              className={cx(
                styles[`${theme}_panel__tab_item`],
                { [styles[`${theme}_tab_active`]]: activeTab === key },
              )}
              key={`tabs_item_${key}`}
              onClick={() => onClickTab(key)}
              role="tab"
              tabIndex={0}
            >
              <Typography 
                type="h3" 
                className={cx(
                  styles[`${theme}_panel__tab_label`],
                  { [styles[`${theme}_label_active`]]: activeTab === key },
                  labelClassName,
                )}
              >
                {label}
              </Typography>
            </div>
          ))}
        </nav>

        {rightElement}
      </div>
      
      {tabs.map(({ key, component }) => (
        <section
          className={cx(
            activeTab === key ? styles.tabs__tab_container : styles.tab_hidden,
            componentClassName,
          )}
          key={`tab_${key}`}
        >
          {
            !component ?
              <div className={styles.empty_tab}> Not found </div> :
              component 
          }
        </section>
      ))}
    </div>
  );
});

export { Tabs };
