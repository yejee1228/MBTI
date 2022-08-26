import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import GlobalStyle from 'lib/style/globalstyles';
import { wrapper } from 'store';
import persistReducer from 'store/modules';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';


const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});
const persistor = persistStore(store);
const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <PersistGate persistor={persistor} loading={<div>loading...</div>}>
              <GlobalStyle />
              <Head>
                <title>MBTI Test</title>
              </Head>
              <Component {...pageProps} />
            </PersistGate>
          </Hydrate>
        </QueryClientProvider>
      </Provider>
    </>
  )
}
export default wrapper.withRedux(App)