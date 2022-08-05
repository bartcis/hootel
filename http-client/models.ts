import { ParsedUrlQuery } from 'querystring';

import { GetServerSidePropsContext } from 'next';

export type HttpRequestParams = {
  url: string;
  config: Record<string, unknown> & { signal?: AbortSignal };
  body?: Record<string, unknown> | FormData;
};

export type HttpClientParams<T> = {
  params?: T;
  context?: GetServerSidePropsContext<ParsedUrlQuery>;
};

export type HttpClientParamsType = {
  appName: string;
  appVersion: string;
  platform: string;
};

export type AbortSignalParam = {
  signal?: AbortSignal;
};

export enum HootelApiId {
  hotelsList = 'hotelsList',
  roomsList = 'roomsList',
}
