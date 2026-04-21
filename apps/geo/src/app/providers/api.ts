import { QueryClient } from '@tanstack/vue-query';
import { client } from 'src/shared/api/client/client.gen';

client.setConfig({
  baseURL: '/api',
  throwOnError: true,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 1000,
    },
  },
});
