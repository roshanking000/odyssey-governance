import { takeLeading } from 'redux-saga/effects';
import { AuthActionTypes } from '../actionsTypes';
import { authGetDataSaga } from './getData';

export default function* authSaga() {
  yield takeLeading(AuthActionTypes.GetData, authGetDataSaga);
}
