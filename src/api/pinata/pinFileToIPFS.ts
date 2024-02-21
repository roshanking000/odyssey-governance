import axios from 'axios';
import { throwApiError } from 'utils';
import { authorizationPinataJwt, urlBasePinata } from 'api/pinata';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pinFileToIPFS = async (selectedFile: any, nameFile: string): Promise<{
  ulrIpfs: string,
  ipfsHash: string,
  pinSize: string,
  timestamp: string, 
}> => {
  const formData = new FormData();

  if (selectedFile) {
    formData.append('file', selectedFile);
  }

  const metadata = JSON.stringify({
    name: nameFile,
  });
  formData.append('pinataMetadata', metadata);
  
  const options = JSON.stringify({
    cidVersion: 0,
  });

  formData.append('pinataOptions', options);
  const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
    maxBodyLength: Infinity,
    headers: {
      Authorization: authorizationPinataJwt,
    },
  });

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
