import { useMemo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Column } from 'react-table';
import {
  Card,
  Table,
  Pagination,
  Link,
} from 'components';
import { usePagination } from 'hooks';
import { formatBalance, stringLongShortcut } from 'utils';
import { proposalSelectors } from 'store/proposal/selectors';
import { useColumns as useVotesColumns } from './columns';
import styles from './styles.module.scss';

export const VotesTable = () => {
  const columnsVotes = useVotesColumns();
  const [page, setPage] = useState(0);
  const [numberVotesInTable] = useState(5);

  const proposal = useSelector(proposalSelectors.getProp('proposal'), shallowEqual);
  
  const votesData = useMemo(() => (proposal ? proposal.votes.map(({
    voter, votingPower, support,
  }) => ({
    1: stringLongShortcut(voter),
    2: support ? proposal.forTitle : proposal.againstTitle,
    3: (
      <Link href="./"> 
        {' '}
        {formatBalance(votingPower)}
        {' '}
      </Link>
    ),
  })) : []), [proposal]);

  const {
    pageCount, 
    paginatedEl: paginatedVotes,
  } = usePagination(page, numberVotesInTable, votesData);

  return (
    <Card 
      title={`Votes (${proposal?.votes.length})`} 
      theme="imperceptible"
      classNameContent={styles.votes__content}
      footerCard={(
        <Pagination 
          page={page}
          pageCount={pageCount}
          onChange={setPage} 
        />
      )} 
    >
      <Table 
        showHeaders={false} 
        data={paginatedVotes}
        className={styles.votes_table_container} 
        columns={columnsVotes as unknown as Column<object>[]} 
      />
    </Card>
  );
};
