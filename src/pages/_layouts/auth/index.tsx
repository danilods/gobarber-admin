import React from 'react';

import {Wrapper, Container, Content} from './styles';


interface LayoutProps {
  children: JSX.Element;
}

export const AuthLayout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <Wrapper>
      <Container>
            <Content>
            {children}
          </Content>
      </Container>
    </Wrapper>
  )
}

export default AuthLayout;
