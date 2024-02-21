import axios, { AxiosRequestConfig } from 'axios';
import { throwApiError } from 'utils';
import { authorizationPinataJwt, urlBasePinata } from 'api/pinata';

export const pinJSONToIPFS = async ({
  title, content, startDate, endDate,
  forTitle, againstTitle, 
}: {
  title: string,
  content: string,
  startDate: string,
  endDate: string,
  forTitle: string,
  againstTitle: string,
}): Promise<{
  ulrIpfs: string,
  ipfsHash: string,
  pinSize: string,
  timestamp: string, 
}> => {
  const data = JSON.stringify({
    pinataOptions: {
      cidVersion: 1,
    },
    pinataMetadata: {
      name: `${title}-${startDate}`,
    },
    pinataContent: {
      title,
      content,
      startDate,
      endDate,
      forTitle,
      againstTitle,
    },
  });
  
  const config: AxiosRequestConfig = {
    method: 'post',
    url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
    headers: { 
      'Content-Type': 'application/json', 
      Authorization: authorizationPinataJwt,
    },
    data,
  };
  
  const res = await axios(config);
  
  if (res.data.response?.message) {
    throwApiError(res.data.response);
  }

  const {
    IpfsHash: ipfsHash,
    PinSize: pinSize,
    Timestamp: timestamp,
  } = res.data;

  return {
    ulrIpfs: `${urlBasePinata}/${ipfsHash}`,
    ipfsHash,
    pinSize,
    timestamp,
  };
};
