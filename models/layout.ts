import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type PageType<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

export type AppPageType = AppProps & {
  Component: PageType;
};
