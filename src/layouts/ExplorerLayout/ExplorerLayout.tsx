import { ComponentType } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/explorer';
import { Footer, Toaster } from '@/components';

const ExplorerLayout = () => (
  <div className="w-full bg-background-black min-h-screen max-w-screen flex flex-col overflow-x-hidden">
    <Header />
    <main className="w-full flex-1 mt-[90px] lg:mt-[105px]">
      <Outlet />
    </main>
    <Toaster />
    <Footer />
  </div>
);

export default ExplorerLayout as ComponentType;
