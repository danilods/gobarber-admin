import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.aside`
  height: 100%;
  width: 264px;
  background: #17181c;
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

  span {
    margin-top: 14px;
    margin-left: 4px;
    font-size: 10px;
    color: #ff9000;
    font-weight: bold;
  }
`;

export const User = styled.div`
list-style: none;
text-decoration: none;
width: 100%;
margin-top: -10px;
height: 180px;
display: flex;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: center;
background: #09090a;

li {
  img {
    width: 82px;
    height: 82px;
    border-radius: 50%;
    margin-left: 20px;
  }
}
`;

export const Nav = styled.nav`
  list-style: none;
  margin-top: 20px;
  margin-left: 5px;


  li {
        width: 240px;
        height: 44px;
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        border-radius: 0 30px 30px 0;

        &:hover {
          background-color: #000;
          transition: color 0.2s;
        }

        div {
          margin-left: 10px;
          width: 34px;
          height: 34px;
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

        a {
          cursor: pointer;
          color: #fff;
          text-decoration: none;
          margin-left: 10px;
          transition: color 0.2s;

          &.selected {
            border-left: 3px solid #ff9000;
            font-weight: bold;
            padding-left: 4px;
          }

          &:hover {
            color: ${shade(0.3, '#fff')};
          }

        }


  }


`;


