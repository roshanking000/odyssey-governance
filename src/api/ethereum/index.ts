import detectEthereumProvider from '@metamask/detect-provider';
import { isBrowser } from 'appConstants';
import { Contract, ethers, providers } from 'ethers';
import { getAddressMetamask } from 'utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Provider = any;

export async function getProvider() {
  if (isBrowser) {
    const metamaskProvider = (await detectEthereumProvider()) as providers.ExternalProvider;
    if (metamaskProvider && metamaskProvider.isMetaMask) {
      return new ethers.providers.Web3Provider(metamaskProvider);
    }
  }
  return new ethers.providers.InfuraProvider(
    'sepolia',
    process.env.INFURA_API_KEY,
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getContract(address: string, abi?: any) {
  const provider = await getProvider();

  return new Contract(
    address,
    abi, 
    isBrowser ? provider.getSigner() : undefined,
  );
}

export const getBalanceEvmApi = async (): Promise<number> => {
  const provider = await detectEthereumProvider();

  if (!provider) return 0;
  const ethersProvider = new ethers.providers.Web3Provider(provider);
  const address = (await getAddressMetamask())[0];
  const balanceWei = await ethersProvider.getBalance(address);
  const balanceEther = ethers.utils.formatEther(balanceWei);

  return Number(balanceEther);
};

export * from './governance';
export * from './strategy';
