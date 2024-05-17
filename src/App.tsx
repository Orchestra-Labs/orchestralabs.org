import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Loader, ScrollToTop } from '@/components';

import { AppRouter } from './app/Router';

export default function App() {
  return (
    <RecoilRoot>
      <Suspense
        fallback={
          <div className="w-screen h-screen">
            <Loader />
          </div>
        }
      >
        <BrowserRouter>
          <ScrollToTop />
          <AppRouter />
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}
