import {
  Card,
  ProgressBar,
} from 'components';
import { useMemo } from 'react';
import numeral from 'numeral';
import styles from './styles.module.scss';

type CurrentResultsProps = {
  votesFor: number,
  votesAgainst: number,
  titleFor: string,
  titleAgainst: string,
  maxVotes: number,
};

export const CurrentResults = ({
  votesFor,
  votesAgainst,
  maxVotes,
  titleFor,
  titleAgainst,
}: CurrentResultsProps) => {
  const progressFor = useMemo(
    () => Number(((votesFor) / maxVotes).toFixed(2)),
    [votesFor, maxVotes],
  );

  const progressAgainst = useMemo(
    () => Number(((votesAgainst) / maxVotes).toFixed(2)),
    [votesAgainst, maxVotes],
  );
    
  return (
    <Card
      title="Current Results"
      className={styles.current_results_container}
      classNameContent={styles.current_results__content}
    >
      <>
        <ProgressBar
          description={titleFor}
          value={`${numeral(votesFor).format('0,0')} Dione`}
          progress={progressFor}
        />
        <ProgressBar
          description={titleAgainst}
          value={`${numeral(votesAgainst).format('0,0')} Dione`}
          progress={progressAgainst}
        />
      </>
    </Card>
  );
};
