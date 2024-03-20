import '@mantine/core/styles.css';

import { Center, Loader } from '@mantine/core';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { AppRouter } from './app/Router';
import { ThemeWrapper } from './theme/theme';

export default function App() {
  return (
    <RecoilRoot>
      <ThemeWrapper>
        <Suspense
          fallback={
            <Center w="100vw" h="100vh">
              <Loader size="xl" />
            </Center>
          }
        >
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </Suspense>
      </ThemeWrapper>
    </RecoilRoot>
  );
}
