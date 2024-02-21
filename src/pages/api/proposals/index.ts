import type { NextApiRequest, NextApiResponse } from 'next';
import { getInfoIpfs, getProposalStateByIdEvmApi, getProposalsCreatedEvmApi } from 'api';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const events = await getProposalsCreatedEvmApi();

    const results = await Promise.all(events.map(async (item) => {
      const json = await getInfoIpfs(item.ipfsHash);
      const status = await getProposalStateByIdEvmApi(item.id);
      return {
        ...item,
        ...json,
        status,
      };
    }));
    res.status(200).json({ results });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log({
      err,
    });
    res.status(500).json({ error: 'failed to load data' });
  }
}
