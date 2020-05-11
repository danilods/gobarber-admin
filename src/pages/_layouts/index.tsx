import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import {Wrapper, Container, Content} from './styles';


interface LayoutProps {
  children: JSX.Element;
}

export const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <Wrapper>
      <Container>
        <Sidebar />
         <Content>
          <Header />
            {children}
          </Content>
      </Container>
    </Wrapper>
  )
}

export default DefaultLayout;
