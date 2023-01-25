import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ComponentRoutes } from 'components/componentRoutes';
const queryClient = new QueryClient();

export const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ComponentRoutes />
      </QueryClientProvider>
    </div>
  );
};
