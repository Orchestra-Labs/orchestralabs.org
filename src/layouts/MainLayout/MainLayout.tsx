import { ComponentType, FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/components';

const MainLayout: FC = () => {
  return (
    <div className="w-full bg-background-black min-h-screen max-w-screen flex flex-col">
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout as ComponentType;
