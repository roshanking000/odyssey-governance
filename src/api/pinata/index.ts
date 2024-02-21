export const authorizationPinataJwt = `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT as string}`;
export const urlBasePinata = `${process.env.NEXT_PUBLIC_PINATA_URL_BASE as string}`;

export * from './pinJSONToIPFS';
export * from './pinFileToIPFS';
export * from './getInfo';
