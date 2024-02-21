import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { FilterType, Loader } from 'components';
import { getFilterForStatus } from 'utils';
import { RequestStatus } from 'types';

import { proposalSelectors } from 'store/proposal/selectors';
import { ProposalActionTypes } from 'store/proposal/actionsTypes';

import { CardCore } from '../CardCore';

import styles from './styles.module.scss';

type Props = {
  activeFilter?: FilterType
};

export const CommunityTab: React.FC<Props> = ({
  activeFilter,
}) => {
  const statusGetData = useSelector(proposalSelectors.getStatus(ProposalActionTypes.GetData));

  const list = useSelector(proposalSelectors.getProp('list'));
  const data = useMemo(() => list.filter((item) => (
    activeFilter ? getFilterForStatus(activeFilter.value).includes(item.status) : true
  )).map(({
    title, id, endDate, status, content,
  }) => ({
    id: +id,
    title,
    endedAt: `${endDate}}`,
    status,
    tag: status,
    content,
  })), [activeFilter, list]);

  if (statusGetData === RequestStatus.REQUEST) return <Loader />;
  
  return (
    <div className={styles.core__container}>
      {data.map((item) => (
        <CardCore key={item.id} {...item} />
      ))}
    </div>
  );
};
