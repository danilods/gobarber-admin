import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';


interface BadgeProps {
  hasUnread: boolean;
}

interface ListProps {
  visible: boolean;
}

interface NotificationItem {
  unread: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button<BadgeProps>`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div<ListProps>`
  position: absolute;
  width: 260px;
  left: 70%;
  top: 10%;
  background: rgba(0, 0, 0, 1.4);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 40px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 460px;
  padding: 5px 15px;
`;

export const Notification = styled.div<NotificationItem>`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    width: 100%;
    border-top: 1px solid rgba(193, 110, 0, 1.0);
  }

  p {
    font-size: 14px;
    font-weight: normal;
    opacity: 0.7;
  }

  time {
    display: block;
    font-size: 10px;
    opacity: 0.6;
    margin-bottom: 5px;
    margin-top: 12px;
  }

  button {
    font-size: 10px;
    margin-left: 44%;
    width: 80px;
    border: 0;
    background: transparent;
    color: #b0b0b0;
  }
    ${props =>
      props.unread &&
      css`
        &::after {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #ff892e;
          border-radius: 50%;
        }
    `}

`;
