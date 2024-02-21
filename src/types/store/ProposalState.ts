import { ProposalActionTypes } from 'store/proposal/actionsTypes';
import {
  PartialRecord, RequestStatus, ProposalStatus,
} from 'types';

export interface ProposalState {
  list: {
    id: string;
    creator: string;
    ipfsHash: string;
    title: string,
    content: string,
    startDate: string,
    startTime: string,
    endDate: string,
    endTime: string,
    forTitle: string,
    againstTitle: string,
    status: ProposalStatus,
  }[],
  resultVote: boolean | null,
  proposal?: {
    votes: {
      proposalId: string; 
      voter: string; 
      support: boolean; 
      votingPower: string;
      txHash: string;
    }[],
    status: ProposalStatus,
    id: string,
    creator: string,
    ipfsHash: string,
    maxVotes: number,
    forVotes: number,
    againstVotes: number,
    executed: string,
    canceled: boolean,
    title: string,
    content: string,
    startDate: string,
    startTime: string,
    endDate: string,
    endTime: string,
    forTitle: string,
    againstTitle: string,
  }
  ui: PartialRecord<ProposalActionTypes, RequestStatus>,
}
