import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FronteggProvider } from '@frontegg/nextjs';

const contextOptions = {
  baseUrl: 'https://samples-demo.frontegg.com',
  clientId: '2e53360e-517e-4c38-a040-ba0e8639f2c7'
}

function MyApp({ Component, pageProps }: AppProps) {
  return <FronteggProvider contextOptions={contextOptions}>
    <Component {...pageProps}/>
  </FronteggProvider>
}

export default MyApp


