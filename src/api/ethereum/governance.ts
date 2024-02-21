import { getContract } from 'api/ethereum';
import { BigNumber } from 'ethers';
import { governanceABI } from 'assets/abi';
import { ProposalStatus } from 'types';
import { 
  Network,
  contracts,
} from 'appConstants';
import { getAddressMetamask } from 'utils';
import { getContractInfura } from './infura';

export const createProposalEvmApi = async ({
  uri, delay, duration, 
}: {
  uri: string,
  delay: number,
  duration: number,
}): Promise<{
  txHash: string,
  idProposal: string, 
}> => {
  const governance = await getContract(contracts[Network.Dione].Governance, governanceABI);

  const address = (await getAddressMetamask())[0];

  const tx = await governance.create(
    contracts[Network.Dione].Executor,
    delay,
    duration,
    [address],
    [123],
    [''],
    ['0x'],
    [false],
    uri,
  );

  const txDetails = await tx.wait();
  return {
    txHash: txDetails.transactionHash,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    idProposal: txDetails.events.find((it: any) => it.event === 'ProposalCreated').args[0].toString(),
  };
};

export const submitVoteProposalEvmApi = async ({
  proposalId, support, 
}: {
  proposalId: string,
  support: boolean,
}): Promise<string> => {
  const governance = await getContract(contracts[Network.Dione].Governance, governanceABI);

  const tx = await governance.submitVote(
    proposalId,
    support,
  );
  const txDetails = await tx.wait();
  return txDetails.transactionHash;
};

export const setVotingDelayEvmApi = async ({
  delay, 
}: {
  delay: string,
}): Promise<string> => {
  const governance = await getContract(contracts[Network.Dione].Governance, governanceABI);

  const tx = await governance.setVotingDelay(
    delay,
  );
  const txDetails = await tx.wait();
  return txDetails.transactionHash;
};

export const getProposalsCountEvmApi = async (): Promise<string> => {
  const governance = await getContractInfura(contracts[Network.Dione].Governance, governanceABI);
  const res = await governance.getProposalsCount();

  return res;
};

export const getVoteOnProposalEvmApi = async (proposalId: string): Promise<boolean | null> => {
  const address = (await getAddressMetamask())[0];

  const governance = await getContract(contracts[Network.Dione].Governance, governanceABI);
  const [support] = await governance.getVoteOnProposal(proposalId, address);

  return support;
};

export const getProposalByIdEvmApi = async (proposalId: string): Promise<{
  id: BigNumber,
  creator: string,
  executor: string,
  targets: string[],
  values: string[],
  signatures: string[],
  calldatas: string[],
  withDelegatecalls: boolean[],
  startBlock: string,
  endBlock: string,
  executionTime: string,
  forVotes: BigNumber,
  againstVotes: BigNumber,
  executed: string,
  canceled: boolean,
  strategy: string,
  ipfsHash: string,
}> => {
  const governance = await getContractInfura(contracts[Network.Dione].Governance, governanceABI);

  const res = await governance.getProposalById(proposalId);

  return {
    id: res[0],
    creator: res[1],
    executor: res[2],
    targets: res[3],
    values: res[4],
    signatures: res[5],
    calldatas: res[6],
    withDelegatecalls: res[7],
    startBlock: res[8],
    endBlock: res[9],
    executionTime: res[10],
    forVotes: res[11],
    againstVotes: res[12],
    executed: res[13],
    canceled: res[14],
    strategy: res[15],
    ipfsHash: res[16],
  };
};

export const getProposalsCreatedEvmApi = async (): Promise<{ 
  id: string; 
  creator: string; 
  ipfsHash: string; 
}[]> => {
  const governance = await getContractInfura(contracts[Network.Dione].Governance, governanceABI);
  
  const eventFilter = governance.filters.ProposalCreated;
  const events = await governance.queryFilter(eventFilter);

  const proposals: { id: string; creator: string; ipfsHash: string; }[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events.forEach((item: any) => {
    if (item && item.args) {
      proposals.push({
        id: item.args[0].toString(),
        creator: item.args[1].toString(),
        ipfsHash: item.args[11].toString(),
      });
    }
  });
  return proposals.sort((a, b) => +b.id - +a.id);
};

export const getProposalsVoteEmittedEvmApi = async (proposalId: string): Promise<{ 
  proposalId: string; 
  voter: string; 
  support: boolean; 
  votingPower: string;
  txHash: string;
}[]> => {
  const governance = await getContractInfura(contracts[Network.Dione].Governance, governanceABI);
  
  const eventFilter = governance.filters.VoteEmitted;
  const events = await governance.queryFilter(eventFilter);
  const votes: { 
    proposalId: string; 
    voter: string; 
    support: boolean; 
    votingPower: string; 
    txHash: string;
  }[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events.forEach((item: any) => {
    if (item && item.args && proposalId === item.args[0].toString()) {
      votes.push({
        proposalId: item.args[0].toString(),
        voter: item.args[1].toString(),
        support: item.args[2].toString(),
        votingPower: item.args[3].toString(),
        txHash: item.transactionHash,
      });
    }
  });

  return votes;
};

export const getProposalStateByIdEvmApi = async (proposalId: string): Promise<ProposalStatus> => {
  const governance = await getContractInfura(contracts[Network.Dione].Governance, governanceABI);
  const res: number = await governance.getProposalState(proposalId);

  const humanProposalStatus = {
    0: ProposalStatus.Pending, 
    1: ProposalStatus.Canceled, 
    2: ProposalStatus.Active, 
    3: ProposalStatus.Failed, 
    4: ProposalStatus.Succeeded, 
    5: ProposalStatus.Queued, 
    6: ProposalStatus.Expired, 
    7: ProposalStatus.Executed,
  };
  return humanProposalStatus[res as keyof(typeof humanProposalStatus)] ?? ProposalStatus.Pending;
};
