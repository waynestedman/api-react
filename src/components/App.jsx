// App.jsx

import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import APOD from './APOD';

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <>
          <APOD />
        </>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
};

export default App
