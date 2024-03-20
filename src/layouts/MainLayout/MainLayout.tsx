import styled from '@emotion/styled';
import { ComponentType, FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/components';
import { design } from '@/theme/design';

const Root = styled.div`
  width: 100%;
  background: ${design.colors.black};
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  max-width: 1152px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  flex: 1;
`;

const MainLayout: FC = () => {
  return (
    <Root>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Root>
  );
};

export default MainLayout as ComponentType;
