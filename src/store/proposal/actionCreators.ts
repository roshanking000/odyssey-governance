import { RequestStatus } from 'types';
import { ProposalState } from 'types/store/ProposalState';
import { ProposalActionTypes } from './actionsTypes';

export const proposalSetState = (payload: Partial<ProposalState>) => ({
  type: ProposalActionTypes.SetState,
  payload,
});

export const proposalSetStatus = (
  payload: { type: ProposalActionTypes, status: RequestStatus },
) => ({
  type: ProposalActionTypes.SetStatus,
  payload,
});

export const proposalGetData = () => ({
  type: ProposalActionTypes.GetData,
});

export const proposalGetItem = (payload: {
  idProposal: string,
}) => ({
  type: ProposalActionTypes.GetProposal,
  payload,
});

export const proposalVote = (payload: {
  idProposal: string,
  result: boolean,
  callback?: () => void,
}) => ({
  type: ProposalActionTypes.Vote,
  payload,
});

export const proposalCreate = (payload: {
  title: string,
  content: string,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
  forTitle: string,
  againstTitle: string,
  callback?: (idProposal: string) => void,
}) => ({
  type: ProposalActionTypes.Create,
  payload,
});
