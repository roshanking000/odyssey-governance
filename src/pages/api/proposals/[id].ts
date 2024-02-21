import type { NextApiRequest, NextApiResponse } from 'next';
import { 
  getInfoIpfs,
  getProposalByIdEvmApi, getProposalStateByIdEvmApi, getProposalsVoteEmittedEvmApi, 
  getTotalVotingSupplyEvmApi,
} from 'api';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { query: { id } } = req;
    const idProposal = id as string;

    const [
      votes,
      { 
        ipfsHash, 
        canceled, 
        forVotes,
        againstVotes,
        executed,
        creator,
      },
      status,
      maxVotes,
    ] = await Promise.all([
      await getProposalsVoteEmittedEvmApi(idProposal),
      await getProposalByIdEvmApi(idProposal),
      await getProposalStateByIdEvmApi(idProposal),
      await getTotalVotingSupplyEvmApi(),
    ]);

    const {
      title, 
      content,
      startDate,
      startTime,
      endDate,
      endTime,
      forTitle,
      againstTitle,
    } = await getInfoIpfs(ipfsHash);

    res.status(200).json({ 
      votes,
      status,
      maxVotes,
      ipfsHash, 
      canceled, 
      forVotes: +forVotes.toString(),
      againstVotes: +againstVotes.toString(),
      executed,
      creator,
      title, 
      content,
      startDate,
      startTime,
      endDate,
      endTime,
      forTitle,
      againstTitle,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log({
      err,
    });
    res.status(500).json({ error: 'failed to load data' });
  }
}
