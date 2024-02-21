import { put } from 'redux-saga/effects';
import { sagaExceptionHandler } from 'utils';
import {
  RequestStatus,
} from 'types';
import { 
  proposalSetStatus, proposalVote,
} from 'store/proposal/actionCreators';
import { submitVoteProposalEvmApi } from 'api';

export function* proposalVoteSaga({ type, payload }: ReturnType<typeof proposalVote>) {
  try{
    yield put(proposalSetStatus({ type, status: RequestStatus.REQUEST }));

    yield submitVoteProposalEvmApi({
      proposalId: payload.idProposal,
      support: payload.result,
    });

    if (payload.callback) payload.callback();
    
    yield put(proposalSetStatus({ type, status: RequestStatus.SUCCESS }));
  } catch (e) {
    sagaExceptionHandler(e);
    yield put(proposalSetStatus({ type, status: RequestStatus.ERROR }));
  }
}
