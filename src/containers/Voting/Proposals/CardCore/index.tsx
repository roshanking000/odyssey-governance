import { memo } from 'react';
import Link from 'next/link';

import { 
  ButtonIcon, 
  // Labels, 
  Typography, 
} from 'components';
import { ArrowIcon } from 'assets';
import { getLabelsForStatus, formatIsoDate } from 'utils';
import { ProposalType } from '../types';

import styles from './styles.module.scss';

export const CardCore: React.FC<ProposalType> = memo(({
  id, title, endedAt, status, content,
  // tag,
}) => (
  <Link href={`/proposals/${id}`} legacyBehavior>
    <a href={`/proposals/${id}`} className={styles.cardCore__container}>
      <Typography type="h4" className={styles.title}>{title}</Typography>
      <Typography type="p" className={styles.content}>{content}</Typography>
      <Typography type="p" className={styles.ended}>{`Ended ${formatIsoDate(endedAt)}`}</Typography>
      <div className={styles.labels_wrap}>
        {getLabelsForStatus(status)}
        {/* <Labels>
          // {tag}
        </Labels> */}
      </div>
    
      <ButtonIcon
        image={ArrowIcon}
        onClick={() => {}}
        className={styles.button}
      />
    </a>
  </Link>
));
