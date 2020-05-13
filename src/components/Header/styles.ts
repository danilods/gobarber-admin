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

    padding: 6px 7px 6px 26px;
    background: transparent;
    border: 0 transparent;



      button {
        flex: 1;
        font-size: 14px;

        border: 0 transparent;
        border-radius: 25px 25px;
      }

      &:hover {
          ${shade(0.7, '#ff9000')};
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
      margin-top: 6px;
      font-size: 14px
    }

    a {
      display: block;
      margin-top: 6px;
      font-size: 12px;
      color: #fff;
    }
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 70%;
    margin-right: 20px;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;
    display: flex;
    flex-direction: column;

    strong {
      color: #fff;
      font-size: 12px;
      margin-left: 5px;
    }

   > img {

      width: 38px;
      height: 38px;
      border-radius: 100%;
    }
  }


`;




