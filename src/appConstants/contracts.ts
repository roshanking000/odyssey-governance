import { Network } from './network';

export const contracts = {
  [Network.Dione]: {
    Governance: process.env.NEXT_PUBLIC_ETHEREUM_GOVERNANCE as string,
    Dione: process.env.NEXT_PUBLIC_ETHEREUM_DIONE as string,
    Executor: process.env.NEXT_PUBLIC_ETHEREUM_EXECUTOR as string,
    Strategy: process.env.NEXT_PUBLIC_ETHEREUM_STRATEGY as string,
  },
};

export const abiByAddress = {
};

export const infuraUrl = `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID as string}`;
