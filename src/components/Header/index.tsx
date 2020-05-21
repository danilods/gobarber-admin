import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import sair from '../../assets/login.svg';
import { Container, User, Notifications } from './styles';
import {
  NotificationList,
  Scroll,
  Notification,
} from '../Notifications/styles';
import { useAuth } from '../../hooks/AuthContext';
import bell from '../../assets/bell.svg';
import mensagem from '../../assets/comunicacoes.svg';
import NotificationData from '../../config/mock-notification-data';

interface NotificationProps {
  uid: number;
  title: string;
  read: boolean;
  timeDistance: string;
  hasUnread: boolean;
  unread: boolean;
  visible: boolean;
}

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { signOut, user } = useAuth();
  const history = useHistory();

  const handleSignOut = useCallback(() => {
    try {
      signOut();
    } catch (err) {
      console.log(err);
    }
    history.push('/');
  }, [signOut, history]);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Notifications>
        <button type="button" onClick={handleToggleVisible}>
          <img src={bell} alt="bell" />
          <div className="notification"></div>
        </button>

        <button type="button" onClick={handleToggleVisible}>
          <img src={mensagem} alt="not" />
          <div className="message"></div>
        </button>

        <NotificationList visible={visible}>
          <Scroll>
            {NotificationData.map((notification) => (
              <Notification key={notification.uid} unread={!notification.read}>
                <p>{notification.title}</p>
                <time>Há 20 minutos</time>
                <button>Marcar como lida</button>
              </Notification>
            ))}
          </Scroll>
        </NotificationList>
      </Notifications>
      <User>
        <img
          src={'https://avatars0.githubusercontent.com/u/13861600?v=4'}
          alt="Danilo"
        />
        <div>
          <span>{user.name}</span>
          <Link to="/profile">Meu perfil</Link>
        </div>
        <button type="button" onClick={handleSignOut}>
          <img src={sair} alt="sair" />
        </button>
      </User>
    </Container>
  );
};

export default Header;
