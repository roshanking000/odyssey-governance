import {
  Card,
  Typography,
} from 'components';
import { getLabelsForStatus, formatIsoDate } from 'utils';
import { ProposalStatus } from 'types';
import styles from './styles.module.scss';

type DetailsDateProps = {
  statusVoting: ProposalStatus,
  startDate: string,
  endDate: string,
};

export const DetailsDate = (
  {
    statusVoting, startDate, endDate, 
  }: DetailsDateProps,
) => (
  <Card
    className={styles.date_details_container}
    classNameContent={styles.date_details__content}
  >
    <div className={styles.date_info}>
      {getLabelsForStatus(
        statusVoting,
        styles.date_info_label,
        styles.date_info_label__image,
      )}
      <div className={styles.date_info_text}>
        <Typography type="p" className={styles.date_info_name}>
          Start Date
        </Typography>
        <Typography type="h3" className={styles.date_info_value}>
          {formatIsoDate(startDate)}
        </Typography>
      </div>
      <div className={styles.date_info_text}>
        <Typography type="p" className={styles.date_info_name}>
          End Date
        </Typography>
        <Typography type="h3" className={styles.date_info_value}>
          {formatIsoDate(endDate)}
        </Typography>
      </div>
    </div>
  </Card>
);
