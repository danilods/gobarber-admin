import React, {useCallback} from 'react';
import {Link, useHistory} from 'react-router-dom';
import sair from '../../assets/sair.svg';
import { Container, User } from './styles';
import {useAuth} from '../../hooks/AuthContext';

const Header: React.FC = () => {

  const {signOutFirebase, userFire} = useAuth();
  const history = useHistory();

  const handleSignOut = useCallback(() => {
    try{
      signOutFirebase();
      console.log('sair');
      history.push('/');
    } catch(err) {
      console.log(err);
    }

  }, [signOutFirebase,history]);

  return (
    <Container>

        <User>
            <img
              src={
                  'https://avatars0.githubusercontent.com/u/13861600?v=4'
              }
              alt="Danilo"
            />
            <div>
              <strong>{userFire.displayName}</strong>
              <Link to="/profile">Meu perfil</Link>

            </div>
            <button type="button" onClick={handleSignOut}>
              <img src={sair} alt=""/><strong>Sair</strong></button>


        </User>
    </Container>
  );

  };

export default Header;
