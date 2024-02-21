import { State } from 'types/store';

export const proposalSelectors = {
  getProp: <PropKey extends keyof State['proposal']>(propKey: PropKey) => (
    state: State,
  ) => state.proposal[propKey],
  getStatus: <T extends keyof State['proposal']['ui']>(propKey: T) => (state: State) => state.proposal.ui[propKey],
};
