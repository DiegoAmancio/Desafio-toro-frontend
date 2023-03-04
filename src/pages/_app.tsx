import '@/styles/globals.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.OAUTH_GOOGLE_ID || ''}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
