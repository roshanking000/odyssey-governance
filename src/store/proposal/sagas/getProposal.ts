import { put, select } from 'redux-saga/effects';
import { formatBalance, sagaExceptionHandler } from 'utils';
import {
  ProposalStatus,
  RequestStatus,
  Unwrap,
} from 'types';
import { 
  proposalSetStatus, proposalGetItem, proposalSetState,
} from 'store/proposal/actionCreators';
import {
  metamaskSelectors,
} from 'store/metamask/selectors';
import { getVoteOnProposalEvmApi } from 'api';

export function* proposalGetItemSaga({ type, payload }: ReturnType<typeof proposalGetItem>) {
  try{
    yield put(proposalSetStatus({ type, status: RequestStatus.REQUEST }));

    const address: string = yield select(metamaskSelectors.getProp('address'));
    if (address !== '') {
      const resultVote: Unwrap<typeof getVoteOnProposalEvmApi> = 
        yield getVoteOnProposalEvmApi(payload.idProposal);
  
      yield put(proposalSetState({ 
        resultVote,
      }));
    }

    const responseVotes: Response = yield fetch(`/api/proposals/${payload.idProposal}`);
    if (responseVotes.ok) {
      const { 
        status,
        votes,
        maxVotes,
        ipfsHash, 
        canceled, 
        executed,
        creator,
        title,
        content,
        startDate,
        startTime,
        endDate,
        endTime,
        forTitle,
        againstTitle, 
        forVotes,
        againstVotes,
      }: { 
        forVotes: string;
        againstVotes: string;
        executed: string;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        status: ProposalStatus;
        maxVotes: string; 
        creator: string; 
        votes: {
          proposalId: string; 
          voter: string; 
          support: boolean; 
          votingPower: string;
          txHash: string;
        }[],
        title: string,
        content: string,
        startDate: string,
        startTime: string,
        endDate: string,
        endTime: string,
        forTitle: string,
        againstTitle: string, 
      } = yield responseVotes.json();
      yield put(proposalSetState({ 
        proposal: {
          votes,
          status,
          id: payload.idProposal,
          maxVotes: +maxVotes,
          creator,
          ipfsHash, 
          canceled, 
          // forVotes: votes.reduce((acc, prev) => acc + (prev.support ? 1 : 0), 0),
          // againstVotes: votes.reduce((acc, prev) => acc + (!prev.support ? 1 : 0), 0),
          forVotes: +formatBalance(forVotes),
          againstVotes: +formatBalance(againstVotes),
          executed,
          title,
          content,
          startDate,
          startTime,
          endDate,
          endTime,
          forTitle,
          againstTitle, 
        }, 
      }));
    }

    yield put(proposalSetStatus({ type, status: RequestStatus.SUCCESS }));
  } catch (e) {
    sagaExceptionHandler(e);
    yield put(proposalSetStatus({ type, status: RequestStatus.ERROR }));
  }
}
