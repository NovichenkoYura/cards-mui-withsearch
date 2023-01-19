import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Box } from '@mui/material';
import { StyledContainer } from './components/common/Container/StyledContainer';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from 'react-query';
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
