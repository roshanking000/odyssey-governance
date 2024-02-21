import createReducer from 'utils/createReducer';
import { RequestStatus } from 'types';
import { AuthState } from 'types/store/AuthState';
import { AuthActionTypes } from './actionsTypes';
import { authHandlers } from './handlers';

export const authInitialState: Readonly<AuthState> = {
  ui: {
    [AuthActionTypes.GetData]: RequestStatus.INIT,
  },
};

export default createReducer(authInitialState, authHandlers);
