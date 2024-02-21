import { StaticImageData } from 'next/image';

export enum Network {
  Dione = 'Dione',
}

export const networkChains: Record<Network, string> = {
  [Network.Dione]: '0xaa36a7',
};

export const chainNameById: Record<string, string> = {
  '0xd': 'Dione',
};

type Chain = {
  chainId?: string,
  chainName: string,
  nativeCurrency: {
    name: string,
    symbol: string,
    decimals: number,
  },
  rpcUrls: string[],
  blockExplorerUrls: string[],
  image?: StaticImageData;
};

type Chains = Pick<
Record<Network, Chain>,
Network.Dione>;

export const chains: Chains = {
  [Network.Dione]: {
    chainId: networkChains[Network.Dione],
    chainName: 'Sepolia test',
    nativeCurrency: {
      name: 'Dione coin',
      symbol: 'DIONE',
      decimals: 18,
    },
    // rpcUrls: ['https://testnode.dioneprotocol.com/ext/bc/C/rpc'],
    // blockExplorerUrls: ['https://testnet.odysseyscan.com'],
    rpcUrls: [`https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID as string}`],
    blockExplorerUrls: ['https://sepolia.etherscan.io'],
    // image: EthereumIcon,
  },
};

export const DIONE_NETWORK = [networkChains[Network.Dione]];

export const evmNetworks = [Network.Dione];
