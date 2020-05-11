import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 10px 20px 0;
    height: 64px;
    background: #191c24;
`;

export const Search = styled.button`
    display: flex;
    align-items: center;
    border-radius: 8px;
    height: 30px;
    width: 175px;
    padding: 6px 7px 6px 26px;
    background: #ff9000;
    border: 0 transparent;

      button {
        flex: 1;
        font-size: 14px;

        border: 0 transparent;
        border-radius: 25px 25px;
      }

      &:hover {
          ${shade(0.4, '#ff9000')};
        }
`;

export const User = styled.div`

  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: center;
    margin-right: 30px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #fff;
    }
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 20px;
  }


`;




