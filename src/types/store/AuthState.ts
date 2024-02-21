import { AuthActionTypes } from 'store/auth/actionsTypes';
import { PartialRecord, RequestStatus } from 'types';

export interface AuthState {
  accessToken?: string,
  refreshToken?: string,
  ui: PartialRecord<AuthActionTypes, RequestStatus>,
}
