import { put } from 'redux-saga/effects';
import { differenceInSeconds, parseISO } from 'date-fns';
import { sagaExceptionHandler } from 'utils';
import {
  RequestStatus, Unwrap,
} from 'types';
import { 
  proposalSetStatus, proposalCreate,
} from 'store/proposal/actionCreators';
import {
  createProposalEvmApi, pinJSONToIPFS, pinFileToIPFS, 
} from 'api';

export function* proposalCreateSaga({ type, payload }: ReturnType<typeof proposalCreate>) {
  try{
    yield put(proposalSetStatus({ type, status: RequestStatus.REQUEST }));

    const {
      title, content, startDate, startTime, endDate,
      endTime, forTitle, againstTitle,
    } = payload;

    const startDateFormat = parseISO(startDate); 
    startDateFormat.setHours(+startTime.split(':')[0], +startTime.split(':')[1]);

    const endDateFormat = parseISO(endDate); 
    endDateFormat.setHours(+endTime.split(':')[0], +endTime.split(':')[1]);

    const {
      ulrIpfs,
    }: Unwrap<typeof pinFileToIPFS> = yield pinJSONToIPFS({
      title,
      content,
      startDate: startDateFormat.toISOString(),
      endDate: endDateFormat.toISOString(),
      forTitle,
      againstTitle,
    });

    const delay = differenceInSeconds(
      new Date(), 
      startDateFormat,
    );

    const duration = differenceInSeconds(
      endDateFormat,
      startDateFormat, 
    );
    
    const { idProposal }: Unwrap<typeof createProposalEvmApi> = 
      yield createProposalEvmApi({
        delay: Math.max(delay, 120),
        duration: Math.max(duration, 50),
        uri: ulrIpfs, 
      });

    if (payload.callback) payload.callback(idProposal);

    yield put(proposalSetStatus({ type, status: RequestStatus.SUCCESS }));
  } catch (e) {
    sagaExceptionHandler(e);
    yield put(proposalSetStatus({ type, status: RequestStatus.ERROR }));
  }
}
