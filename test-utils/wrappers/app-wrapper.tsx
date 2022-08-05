import { RouterContext } from 'next/dist/shared/lib/router-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { createMockRouter } from '../mock-router';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';

export const testRouter = createMockRouter({
  basePath: '/',
});

export const AppWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterContext.Provider value={testRouter}>{children}</RouterContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
};
