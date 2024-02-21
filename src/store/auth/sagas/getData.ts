import { put } from 'redux-saga/effects';
import { sagaExceptionHandler } from 'utils';
import {
  RequestStatus,
} from 'types';
import { 
  authSetStatus, authGetData,
} from 'store/auth/actionCreators';

export function* authGetDataSaga({ type }: ReturnType<typeof authGetData>) {
  try{
    yield put(authSetStatus({ type, status: RequestStatus.REQUEST }));

    yield put(authSetStatus({ type, status: RequestStatus.SUCCESS }));
  } catch (e) {
    sagaExceptionHandler(e);
    yield put(authSetStatus({ type, status: RequestStatus.ERROR }));
  }
}
