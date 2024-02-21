export const getInfoIpfs = async (ipfsUrl: string) => {
  try {
    const response: Response = await fetch(ipfsUrl);
    const {
      title, 
      content,
      startDate,
      startTime,
      endDate,
      endTime,
      forTitle,
      againstTitle,
    }: {
      title: string,
      content: string,
      startDate: string,
      startTime: string,
      endDate: string,
      endTime: string,
      forTitle: string,
      againstTitle: string,
    } = await response.json();
  
    return {
      title, 
      content,
      startDate,
      startTime,
      endDate,
      endTime,
      forTitle,
      againstTitle,
    };
  } catch {
    return {
      title: 'Not found', 
      content: 'Not found',
      startDate: '??',
      startTime: '??',
      endDate: '??',
      endTime: '??',
      forTitle: 0,
      againstTitle: 0,
    };
  }
};
