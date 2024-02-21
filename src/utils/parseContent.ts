import parse from 'html-react-parser';
import {
  ProposalStatus,
} from 'types';

type ParseDataContentProps = {
  id: string;
  creator: string;
  ipfsHash: string;
  title: string;
  content: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  forTitle: string;
  againstTitle: string;
  status: ProposalStatus;
};

export const parseDataContent = (data: Array<ParseDataContentProps>) => {
  for (let i = 0; i < data.length; i++) {
    const content = parse(`<div>${data[i].content}</div>`) as any;
    data[i].content = content;
  }
  return data;
};

export const parseContent = (content: string) => {
  const parsed_content = parse(`<div>${content}</div>`);
  return parsed_content;
};
