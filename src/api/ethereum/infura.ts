import { Contract, ethers } from 'ethers6';

export async function getProviderInfura() {
  return new ethers.InfuraProvider(
    'sepolia',
    process.env.INFURA_API_KEY,
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getContractInfura(address: string, abi?: any) {
  const provider = await getProviderInfura();
  const signer = new ethers.Wallet(process.env.INFURA_WALLET_PK as string, provider);
  return new Contract(
    address,
    abi, 
    signer,
  );
}
