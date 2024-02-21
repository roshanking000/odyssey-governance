import { ProposalStatus } from 'types';

export const getFilterForStatus = (activeFilterValue: string) => {
  if (activeFilterValue === 'voteNow') return [ProposalStatus.Active];
  if (activeFilterValue === 'soon') return [ProposalStatus.Pending];
  if (activeFilterValue === 'closed') return [ProposalStatus.Canceled, ProposalStatus.Failed, ProposalStatus.Succeeded];
  return [
    ProposalStatus.Active, 
    ProposalStatus.Pending, 
    ProposalStatus.Canceled, 
    ProposalStatus.Failed, 
    ProposalStatus.Succeeded,
  ];
};
