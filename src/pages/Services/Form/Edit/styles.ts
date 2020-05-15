import styled, {keyframes} from 'styled-components';

import {shade} from 'polished';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 40px 20px;
    background: #000;

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
`;

export const DataCard = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 30px;
`;

export const CardItem = styled.div`
  background: transparent;
  border: 1px solid #ff9000;
  padding: 22px 32px;
  border-radius: 5px;
  color: #fff;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 16px;
    }

    img {
      height: 44px;
      width: 44px;
    }
  }
  h1 {
    margin-top: 4px;
    font-size: 28px;
    font-weight: normal;
    line-height: 54px;
  }

  input {
    min-width: 20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

      button {
      max-height: 40px;
      max-width: 260px;
      background: #0099cc;
      color: #000000;
      margin-left: 5px;
    }
  }
`;

export const User = styled.div`
  margin-left: 0px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 20px;
  border-bottom: 1px solid #eee;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

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
    width: 88px;
    height: 88px;
    border-radius: 50%;
    margin-right: 20px;
  }


`;

const appearFromRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
`;

const appearFromLeft = keyframes`
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromRight} 1.5s;

     form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
          margin-bottom: 24px;
        }

        a {
          color: #F4ede8;
          display: block;
          margin-top: 24px;
          transition: color 0.2s;

          &:hover {
            color: ${shade(0.2, '#f4ede8')};
          }
        }
      }

      > a {
          color: #ff9000;
          display: block;
          margin-top: 24px;
          transition: color 0.2s;

          display:flex;
          align-items: center;

          svg {
            margin-right: 16px;
          }

          &:hover {
            color: ${shade(0.2, '#F4ede8')};
          }
      }
`;



