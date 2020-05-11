import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.aside`
  height: 100%;
  width: 264px;
  background: #191c24;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px;

  }

`;

export const MainLogo = styled.button`
  background: transparent;
  border: 0;
  border-bottom: 1px solid transparent;
  font-size: 22px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 15px 25px;

  img {
    width: 62px;
    height: 62px;
    margin-left: 0;
    background: transparent;
  }

  h3 {
    margin-left: 10px;
    font-weight: bold;
  }
`;

export const User = styled.div`

list-style: none;
text-decoration: none;
margin-top:30px;
margin-left: 50px;
display: flex;
align-items: center;

  img {
    width: 82px;
    height: 82px;
    border-radius: 50%;
    margin-left: 20px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 40px;
  margin-left: 25px;


  &:first-child {
    margin-top:25px;

  }

  li {
    text-decoration: none;
    margin-top: 18px;
    display: flex;
    align-items: center;


    a {
      color: #fff;
      text-decoration: none;
      font-size: 0.9375rem;
      line-height: 32px;
      margin-left: 20px;

      &:hover {
        color: #b3b3b3;
      }
    }

    div {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #2c2e33;

      img {
        width: 62px;
        height: 62px;

      }
    }



    span {
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: bold;
    }
  }


`;


