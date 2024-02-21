import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { apiBaseUrl } from 'appConstants';

export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

export function* callApi(
  requestConfig: AxiosRequestConfig,
): SagaIterator {
  const res: AxiosResponse =
    yield call<(config: AxiosRequestConfig) => void>(api, requestConfig);

  return res.data;
}

export * from './apiInterceptors';
