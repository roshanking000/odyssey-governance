import { memo } from 'react';
import Image from 'next/image';

import { RoundIconLink, Typography } from 'components';
import { routes } from 'appConstants';
import { ArrowBottomIcon, Ellipse3, Ellipse4 } from 'assets';

import styles from './styles.module.scss';

export const GotSuggestion: React.FC = memo(() => (
  <section className={styles.gotSuggestion__container}>
    <div className={styles.ellipse3}>
      <Image src={Ellipse3} alt="ellipse3" width={461} height={528} />
    </div>

    <div className={styles.ellipse4}>
      <Image src={Ellipse4} alt="ellipse4" />
    </div>

    <div className={styles.gotSuggestion__wrapper}>
      <Typography type="h2" className={styles.gotSuggestion__title}>Got a suggestion?</Typography>
      <Typography type="p" className={styles.gotSuggestion__description}>
        Community proposals are an essential tool for understanding the community&apos;s views 
        on different ideas. While not every proposal may directly lead to implementation, 
        those that receive significant community backing stand a chance of becoming Core 
        proposals, highlighting the importance of community input in our governance process.
      </Typography>
      <RoundIconLink
        href={routes.proposal.root}
        label="Make a Proposal"
        iconSrc={ArrowBottomIcon}
        className={styles.round}
        classNameIcon={styles.round_icon}
      />
    </div>
  </section>
));
