import Head from 'next/head';
import React  from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppPageType } from '../../models/layout';
import store from '../../store/store';

import styles from './app.module.css'

const queryClient = new QueryClient()

export const AppComponent = ({ Component, pageProps }: AppPageType) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Head>
          <title>Hootel App</title>
          <meta name='author' content='ABC' />
          <meta name='description' content='Super app' />
          <meta name='viewport' content='height=device-height, width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'></link>
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap" rel="stylesheet"></link>
        </Head>
        <main className={styles.app}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      </Provider>
    </QueryClientProvider>
  );
};

