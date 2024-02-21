import { takeLeading } from 'redux-saga/effects';
import { ProposalActionTypes } from '../actionsTypes';
import { proposalGetDataSaga } from './getData';
import { proposalCreateSaga } from './create';
import { proposalGetItemSaga } from './getProposal';
import { proposalVoteSaga } from './vote';

export default function* proposalSaga() {
  yield takeLeading(ProposalActionTypes.GetData, proposalGetDataSaga);
  yield takeLeading(ProposalActionTypes.GetProposal, proposalGetItemSaga);
  yield takeLeading(ProposalActionTypes.Create, proposalCreateSaga);
  yield takeLeading(ProposalActionTypes.Vote, proposalVoteSaga);
}
