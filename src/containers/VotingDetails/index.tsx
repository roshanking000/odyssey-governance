import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Loader } from 'components';
import { ProposalStatus, RequestStatus } from 'types';

import { proposalGetItem } from 'store/proposal/actionCreators';
import { proposalSelectors } from 'store/proposal/selectors';
import { ProposalActionTypes } from 'store/proposal/actionsTypes';

import { CurrentResults } from './CurrentResults';
import { DetailsTable } from './DetailsTable';
import { VotesTable } from './VotesTable';
import { DetailsInfo } from './DetailsInfo';
import { DetailsDate } from './DetailsDate';
import { CastVote } from './CastVote';

import styles from './styles.module.scss';

export const VotingDetails: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { query: { id } } = router;

  const statusGetProposal = useSelector(
    proposalSelectors.getStatus(ProposalActionTypes.GetProposal),
  );
  const proposal = useSelector(proposalSelectors.getProp('proposal'), shallowEqual);
  const statusVoting = proposal?.status ?? ProposalStatus.Pending; 

  useEffect(() => {
    if (id) {
      dispatch(proposalGetItem({
        idProposal: id as string,
      }));
    }
  }, [dispatch, id]);

  if (
    (!proposal || proposal.id !== id) && 
    statusGetProposal === RequestStatus.REQUEST
  ) return <Loader />;

  return (
    <div className={styles.voting_details__container}>
      <div className={styles.right_container}>
        <DetailsInfo
          isCore={false}
          title={proposal?.title ?? ''}
          description={proposal?.content ?? ''}
          statusVoting={statusVoting}
        />
        {statusVoting === ProposalStatus.Active && <CastVote />}
        {statusVoting !== ProposalStatus.Pending && (
          <VotesTable />
        )}
      </div>
      <div className={styles.left_container}>
        <DetailsTable
          id={proposal?.id ?? 'id'}
          creator={proposal?.creator ?? 'creator'}
        />
        <DetailsDate 
          statusVoting={statusVoting}
          startDate={`${proposal?.startDate ?? ''}`}
          endDate={`${proposal?.endDate ?? ''}`}
        />
        <CurrentResults
          votesFor={proposal?.forVotes ?? 0}
          votesAgainst={proposal?.againstVotes ?? 0}
          maxVotes={proposal?.maxVotes ?? 100}
          titleFor={proposal?.forTitle ?? 'forTitle'}
          titleAgainst={proposal?.againstTitle ?? 'againstTitle'}
        />
      </div>
    </div>
  );
};
