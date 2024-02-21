import { ProposalStatus } from 'types';

export enum StatusProposal {
  VoteNow = 'Vote Now',
  Soon = 'Soon',
  Closed = 'Closed',
}

export enum TagsProposal {
  Core = 'Core',
}

export interface ProposalType {
  id: number;
  title: string;
  content: string;
  endedAt: string;
  status: ProposalStatus | 'core';
  tag: TagsProposal | string;
}
