import { Labels } from 'components';
import { ProposalStatus } from 'types';

export function getLabelsForStatus(
  status: ProposalStatus | 'core', 
  className: string = '', 
  classNameImage: string = '',
) {
  let theme = 'default' as 'default' | 'green' | 'red' | 'orange' | undefined; 
  let text = 'Core';
  switch (status) {
    case 'core':
      theme = 'default'; text = 'Core';
      break;
    case ProposalStatus.Active:
      theme = 'green'; text = 'Vote Now';
      break;
    case ProposalStatus.Pending:
      theme = 'orange'; text = 'Soon';
      break;
    case ProposalStatus.Failed:
    case ProposalStatus.Executed:
    case ProposalStatus.Succeeded:
      theme = 'red'; text = 'Closed';
      break;
    default:
      break;
  }
  return (
    <Labels 
      theme={theme} 
      className={className} 
      classNameImage={classNameImage}
    > 
      {text} 
    </Labels>
  );
}
