import { ProposalState } from './ProposalState';
import { AuthState } from './AuthState';
import { MetamaskState } from './MetamaskState';

export interface State {
  proposal: ProposalState,
  auth: AuthState,
  metamask: MetamaskState
}
