import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% {
    -moz-box-shadow: 0 0 0 0 #b0b0b0;
    box-shadow: 0 0 0 0 #b0b0b0;
    }
    80% {
        -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
        box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 10px 0;
  height: 64px;
  background: #17181c;
`;

export const Notifications = styled.div`
  display: flex;
  align-items: center;

  padding: 6px 7px 6px 26px;
  background: transparent;
  border: 0 transparent;

  button {
    background: transparent;
    height: 22px;
    width: 22px;
    border: 0 transparent;
    margin-left: 16px;
    margin-right: 24px;
    margin-top: -12px;

    img {
      height: 22px;
      width: 22px;
      border: 0 transparent;
      margin-left: 24px;
    }
    div {
      height: 10px;
      width: 10px;
      margin-top: -30px;
      margin-left: 42px;
      border-radius: 50%;
      animation: ${pulse} 1.5s ease-in-out;
      animation-iteration-count: infinite;

      &.message {
        background: #7cfc00;
      }

      &.notification {
        background: #cf3261;
      }
    }
  }
`;

export const User = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 44px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: center;
    margin-right: 30px;

    span {
      display: block;
      color: #fff;
      margin-top: 6px;
      font-size: 14px;
    }

    a {
      display: block;
      margin-top: 6px;
      font-size: 12px;
      color: #fff;
    }
  }
  button {
    margin-top: 10px;
    height: 36px;
    width: 36px;
    background: transparent;
    border-color: transparent;

    img {
      height: 24px;
      width: 24px;
    }
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 70%;
    margin-right: 20px;
  }
`;
