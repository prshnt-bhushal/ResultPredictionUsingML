import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoadingSpinner from '../../components/LoadingSpinner';

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  setIsLoadingProps,
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        {isLoading ? (
          <LoadingSpinner /> // Render the LoadingSpinner component when isLoading is true }
        ) : (
          <Component {...pageProps} setIsLoadingProps={setIsLoading} />
        )}
      </SessionProvider>
    </QueryClientProvider>
  );
}
