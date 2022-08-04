import React  from 'react';
import { Provider } from 'react-redux';
import { AppPageType } from '../../models/layout';
import store from '../../store/store';

export const AppComponent = ({ Component, pageProps }: AppPageType) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
       <main className='app'>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </Provider>
  );
};

