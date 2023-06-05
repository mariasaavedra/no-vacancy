import "@/styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  PersistQueryClientProvider,
  Persister,
} from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import { AppProps } from "next/app";
import { QueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 0, // 24 hours
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [persister, setPersister] = useState<Persister | undefined | null>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storage = createSyncStoragePersister({
        storage: window.localStorage,
        throttleTime: 1000,
      });
      setPersister(storage);
    }
  }, [])
  
  return (
    <>
      {persister !== null && persister !== undefined && (
        <PersistQueryClientProvider
          persistOptions={{ persister }}
          client={queryClient}
        >
          <Component {...pageProps} />;
          <ReactQueryDevtools initialIsOpen={false} />
        </PersistQueryClientProvider>
      )}
    </>
  )
}

export default MyApp;
