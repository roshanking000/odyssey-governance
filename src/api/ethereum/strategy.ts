import { strategyABI } from 'assets/abi';
import { 
  Network,
  contracts,
} from 'appConstants';
import { formatBalance } from 'utils';
import { getContractInfura } from './infura';

export const getTotalPropositionSupplyEvmApi = async (): Promise<string> => {
  const strategy = await getContractInfura(contracts[Network.Dione].Strategy, strategyABI);
  const res = await strategy.getTotalPropositionSupply();
  
  return formatBalance(res.toString());
};

export const getTotalVotingSupplyEvmApi = async (): Promise<string> => {
  const strategy = await getContractInfura(contracts[Network.Dione].Strategy, strategyABI);
  const res = await strategy.getTotalVotingSupply();
  
  return formatBalance(res.toString());
};
