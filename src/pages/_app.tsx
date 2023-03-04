import { wrapper } from '@/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { MuiSnackBar } from '@/components/atoms/a-snackbar';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.OAUTH_GOOGLE_ID || ''}>
        <MuiSnackBar />
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </Provider>
  );
}
export default App;
