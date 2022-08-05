import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { globalErrorHandlerInterceptor } from './interceptors';

import { HttpClientParams, HttpClientParamsType, HttpRequestParams } from './models';

const httpClientParams = {
  appName: 'Hootel',
  appVersion: '123',
  platform: 'WEB',
};

const httpClient = <T>({ params }: HttpClientParams<T>) => {
  const axiosInstance = axios.create({ params });

  return {
    axiosInstance,
    get: async <T>({ url, config }: HttpRequestParams): Promise<T> => await axiosInstance.get(url, config),
    post: async ({ url, body, config }: HttpRequestParams) => await axiosInstance.post(url, body, config),
    patch: async ({ url, body, config }: HttpRequestParams) => await axiosInstance.patch(url, body, config),
    delete: async ({ url, config }: HttpRequestParams) => await axiosInstance.delete(url, config),
  };
};

export const createHttpInstance = ({ context }: { context?: GetServerSidePropsContext<ParsedUrlQuery> }) => {
  const axiosInstance = httpClient<HttpClientParamsType>({ params: httpClientParams, context });

  globalErrorHandlerInterceptor({ instance: axiosInstance.axiosInstance });

  return axiosInstance;
};
