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
    const content = parse(data[i].content) as any;
    const dataContent = [];

    if (typeof content === 'object') {
      if (typeof content.props.children === 'string') {
        dataContent.push({
          type: 'p',
          content: content.props.children,
        });
      } else {
        dataContent.push({
          type: content.props.children.type,
          className: content.props.children.props.className,
          content: content.props.children.props.children,
        });
      }
      data[i].content = dataContent[0].content;
    } else if (typeof content === 'string') {
    }
  }
  return data;
};
