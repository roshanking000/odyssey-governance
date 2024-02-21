import { call, put } from 'redux-saga/effects';
import { sagaExceptionHandler } from 'utils';
import {
  RequestStatus,
} from 'types';

import { getBalanceEvmApi } from 'api';
import { metamaskGetBalance, metamaskSetState, metamaskSetStatus } from '../actionCreators';

export function* getBalanceSaga({
  type,
}: ReturnType<typeof metamaskGetBalance>) {
  try {
    yield put(metamaskSetStatus({ type, statusRequest: RequestStatus.REQUEST }));
      
    const balance: number = yield call(getBalanceEvmApi);
    yield put(metamaskSetState({ balance }));

    yield put(metamaskSetStatus({ type, statusRequest: RequestStatus.SUCCESS }));
  } catch (e) {
    sagaExceptionHandler(e);
    yield put(metamaskSetStatus({ type, statusRequest: RequestStatus.ERROR }));
  }
}
