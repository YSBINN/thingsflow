import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Header from './header';
import Sidebar from './sidebar';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Sidebar />
        {children}
      </LayoutWrapper>
    </>
  );
};

export default Layout;

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
