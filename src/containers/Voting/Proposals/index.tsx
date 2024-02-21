import { memo, useMemo, useState } from 'react';

import {
  FilterType,
  Filters,
  Tabs,
  Typography,
} from 'components';
import { votingFilters } from 'appConstants';
import { AllTab } from './AllTab';
// import { CommunityTab } from './CommunityTab';
// import { CoreTab } from './CoreTab';

import styles from './styles.module.scss';

export const Proposals: React.FC = memo(() => {
  const [activeFilter, setActiveFilter] = useState<FilterType | undefined>();

  const tabs = useMemo(() => [
    {
      key: 'all',
      label: 'All',
      component: <AllTab activeFilter={activeFilter} />,
    },
    // {
    //   key: 'core',
    //   label: 'Core',
    //   component: <CoreTab activeFilter={activeFilter} />,
    // },
    // {
    //   key: 'community',
    //   label: 'Community',
    //   component: <CommunityTab activeFilter={activeFilter} />,
    // },
  ], [activeFilter]);

  return (
    <div className={styles.proposals__container}>
      <Typography type="h2" className={styles.proposals__title}>Proposals</Typography>
  
      <Tabs
        defaultKey="all"
        tabs={tabs}
        theme="line"
        className={styles.tabs}
        panelClassName={styles.tabs__panel}
        componentClassName={styles.tabs__section}
        rightElement={(
          <Filters
            filters={votingFilters}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            className={styles.filters}
          />
        )}
      />
    </div>
  );
});
