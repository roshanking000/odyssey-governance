import { AxiosError, AxiosRequestConfig } from 'axios';
import { Dispatch, MiddlewareAPI } from 'redux';
// import { 
//   authLogout, 
//   authSetState,
// } from 'store/auth/actionCreators';
import { State } from 'types';
// import { ApiEndpoint } from 'appConstants';
import { api } from 'api';

let isAlreadyFetchingAccessToken = false;

export const apiInterceptors = (store: MiddlewareAPI<Dispatch, State>) => {
  // Pass token to axios
  api.interceptors.request.use((options: AxiosRequestConfig): AxiosRequestConfig => {
    const { accessToken } = store.getState().auth;
    const newOptions = options;

    if (
      !accessToken ||
      newOptions.method === 'patch'
    ) {
      return newOptions;
    }

    if (newOptions.headers) {
      newOptions.headers.Authorization = `Bearer ${accessToken}`;
    }

    return newOptions;
  });

  // Refresh on 401
  api.interceptors.response.use((res) => res, async (error: AxiosError) => {
    const { refreshToken } = store.getState().auth;

    if (
      error.response?.status === 401 &&
      refreshToken &&
      error.config.method !== 'patch' && 
      !isAlreadyFetchingAccessToken
    ) {
      if (!error.config.headers) throw error;
      isAlreadyFetchingAccessToken = true;
      
      // try {
      //   // try to refresh token
      //   const { accessToken, refreshToken: newRefresh } = await apiAuthRefresh(refreshToken);
      //   store.dispatch(authSetState({ accessToken, refreshToken: newRefresh }));
        
      //   await api(error.config);
      //   isAlreadyFetchingAccessToken = false;
      //   return;
      // } catch (e) {
      //   store.dispatch(authLogout());
      //   // throw original error
      //   isAlreadyFetchingAccessToken = false;
      //   // throw error;
      // }
    }
    throw error;
  });
};
