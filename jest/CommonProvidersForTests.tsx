import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// see https://tanstack.com/query/v4/docs/guides/testing
export const testingQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error:
      process.env.NODE_ENV === 'test'
        ? () => {
            // no logging
          }
        : console.error,
  },
});

export const CommonProvidersForTests = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={testingQueryClient}>
        {children}
      </QueryClientProvider>
    </NavigationContainer>
  );
};
