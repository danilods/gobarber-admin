import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;
  background: #000;

`;

export const Actions = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong {
    font-size: 20px;
  }

  h1 {
    width: 250px;
    height: 22px;
    font-family: Roboto;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

    button {
      height: 40px;
      max-width: 320px;
      color: #000;

    }
`;

export const New = styled.button`
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

export const DataCard = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 32px;
  margin-top: 20px;
`;

export const CardItem = styled.div`
  background: #191c24;  padding: 22px 32px;
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


`;

