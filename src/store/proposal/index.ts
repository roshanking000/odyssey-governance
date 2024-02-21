import createReducer from 'utils/createReducer';
import { RequestStatus } from 'types';
import { ProposalState } from 'types/store/ProposalState';
import { ProposalActionTypes } from './actionsTypes';
import { proposalHandlers } from './handlers';

export const proposalInitialState: Readonly<ProposalState> = {
  resultVote: null,
  list: [],
  ui: {
    [ProposalActionTypes.GetData]: RequestStatus.INIT,
  },
};

export default createReducer(proposalInitialState, proposalHandlers);
