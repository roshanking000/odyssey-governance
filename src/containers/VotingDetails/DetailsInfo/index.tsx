import Markdown from 'react-markdown';
import {
  Typography,
} from 'components';
import { getLabelsForStatus } from 'utils';
import { ProposalStatus } from 'types';
import styles from './styles.module.scss';

type DetailsInfoProps = {
  isCore: boolean,
  statusVoting: ProposalStatus,
  title: string,
  description: string,
};

export const DetailsInfo = ({
  isCore = true,
  title,
  description,
  statusVoting = ProposalStatus.Pending,
}: DetailsInfoProps) => (
  <>
    <div className={styles.details_info_labels}>
      {getLabelsForStatus(statusVoting)}
      {isCore && getLabelsForStatus('core')}
    </div>
    <div className={styles.details_info_info}>
      <Typography type="h3" className={styles.voting_details_title}>
        {title}
      </Typography>
      <Typography type="p" className={styles.voting_details_description}>
        <Markdown>
          {description}
        </Markdown>
      </Typography>
    </div>
  </>
);
