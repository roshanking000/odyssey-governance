import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from 'store/configureStore';
import './globals.css';

import 'assets/styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-slidedown/lib/slidedown.css';

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const { store, props } = wrapper.useWrappedStore(rest);
  
  useEffect(() => {
    setLoading(false);
    
    const handleStart = (url: string) => {
      if (url !== router.pathname) setLoading(true);
      else setLoading(false);
    };
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <Provider store={store}>
      {!loading && <Component {...props.pageProps} /> }
      
      <ToastContainer
        limit={10}
        newestOnTop
        theme="light"
      />
    </Provider>
  );
};

export default MyApp;
