import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import bell from '../../assets/bell.svg';
import api from '../../services/api';


import {
  Container,
  Badge,
  Notification,
  NotificationList,
  Scroll
} from './styles';

interface NotificationProps {
  icon: string;
  className?: string;
  badgeColor: string;
  hasUnread: boolean;
  unread: boolean;
  visible: boolean;
  style: string;
}

interface NotificationData {
  uid: string;
  description: string;
  read: boolean;
  unread: boolean;
  createdAt: string;
  timeDistance?:string;
}

const Notifications: React.FC<NotificationProps> = () => {

  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  const hasUnread = useMemo(
    () => !!notifications
    .find((notification: NotificationData) => notification.read === false),
    [notifications]
  );

  async function handleMarkAsRead(id: string) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map((notification: NotificationData) =>
        notification.uid === id ? { ...notification, read: true } : notification
      )
    );
  }

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map((notification:NotificationData) => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        )
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}
      hasUnread={hasUnread}
      >
        <img src={bell} alt="bell" /><div className="notification"></div>
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map((notification: NotificationData) => (
            <Notification key={notification.uid} unread={!notification.read}>
              <p>{notification.description}</p>
              <time>{notification.timeDistance}</time>

            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
