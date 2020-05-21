import React from 'react';

import { Container } from './styles';

import logo from '../../assets/main-logo.svg';

const Loader: React.FC = () => {

  return (
    <Container>

        <img src={logo} alt=""/>
        <h3>Carregando...</h3>
     </Container>
  );
}

export default Loader;
