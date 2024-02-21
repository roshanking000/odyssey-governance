import { ActionFn } from 'types/redux';
import { ProposalState } from 'types/store/ProposalState';
import { proposalSetState, proposalSetStatus } from './actionCreators';
import { ProposalActionTypes } from './actionsTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ProposalHandlerFn<F extends (...args: any) => any> = ActionFn<ProposalState, ReturnType<F>>;

const setState: ProposalHandlerFn<typeof proposalSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

const setStatus: ProposalHandlerFn<typeof proposalSetStatus> = (
  state,
  { payload },
) => ({
  ...state,
  ui: {
    ...state.ui,
    [payload.type]: payload.status,
  },
});

export const proposalHandlers = {
  [ProposalActionTypes.SetState]: setState,
  [ProposalActionTypes.SetStatus]: setStatus,
};
