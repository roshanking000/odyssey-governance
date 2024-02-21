import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';

import {
  RoundIconLink,
  Typography,
} from 'components';
import { ArrowBottomIcon, Ellipse2 } from 'assets';
import { routes } from 'appConstants';
import { proposalGetData } from 'store/proposal/actionCreators';
import { Proposals } from './Proposals';
import { GotSuggestion } from './GotSuggestion';

import styles from './styles.module.scss';

export const Voting: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(proposalGetData());
  }, [dispatch]);
  
  return (
    <div className={styles.voting__container}>
      <div className={styles.ellipse2}>
        <Image src={Ellipse2} alt="ellipse2" />
      </div>

      <Typography type="h1" className={styles.voting__title}>Odyssey Chain’s Governance</Typography>
      <Typography type="p" className={styles.voting__description}>
        Have your say in the future of the Dione Protocol ecosystem!
      </Typography>
      
      <RoundIconLink
        href={routes.proposal.root}
        label="Make a Proposal"
        iconSrc={ArrowBottomIcon}
        className={styles.round}
        classNameIcon={styles.round_icon}
      />

      <Proposals />

      <GotSuggestion />
    </div>
  );
};
