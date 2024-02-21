import { fork } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import metamaskSaga from './metamask/sagas';
import proposalSaga from './proposal/sagas';

export default function* rootSaga() {
  yield fork(proposalSaga);
  yield fork(authSaga);
  yield fork(metamaskSaga);
}
