import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Search, User } from './styles';

const Header: React.FC = ({}) => {
  return (
    <Container>
        <Search>
          <button  type="button"></button>
        </Search>>
        <User>
            <img
              src={
                  'https://avatars0.githubusercontent.com/u/13861600?v=4'
              }
              alt="Danilo"
            />
            <div>
              <strong>Danilo</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>


        </User>
    </Container>
  );

  };

export default Header;
