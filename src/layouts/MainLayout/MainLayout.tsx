import styled from '@emotion/styled';
import { ComponentType, FC } from 'react';

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

const MainLayout: FC = () => {
  return <Root>MainLayout</Root>;
};

export default MainLayout as ComponentType;
