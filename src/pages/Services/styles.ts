import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;
  background: #000;

`;

export const List = styled.div`
  margin-top: 20px;
  margin-left: 34px;
  margin-top: 38px;
  display: flex;
`;

export const Actions = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 20px;
  }
  input {
    min-width: 300px;
    max-width: 300px;
  }

  h1 {
    width: 380px;
    margin-top: 0;
    font-family: Roboto;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }

    button {
      height: 40px;
      min-width: 300px;
      max-width: 300px;
      margin-left: 35px;
      color: #000;

    }
`;
export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 28px;
  margin-top: 0px;
`;

export const Card = styled.div`
  background: #191c24;
  padding: 22px 12px;
  border-radius: 5px;
  color: #fff;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }

    strong {
      font-size: 13px;
      margin-top: 10px;
    }

  }
  h1 {
    margin-top: 14px;
    font-size: 14px;
    font-weight: normal;
    line-height: 54px;
  }

  img {
      height: 68px;
      width: 68px;
      margin-left: 6;
      border-radius: 50%;
      border: 1px solid transparent;
    }
`;

export const DataCard = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
export const ListCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 8px;
`;


export const User = styled.div`

  display: flex;
  margin-left: 0px;
  padding-left: 5px;


  div {
    text-align: left;
    margin-right: 30px;

     div {
      height: 12px;
      width: 12px;
      background: #7CFC00;
      border-radius: 50%;
      border-color: transparent
    }

    strong {
      display: block;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }

    h4 {
      display: block;
      margin-top: 6px;
      font-size: 12px;
      color: #fff;
    }
  }

  img {
    min-width: 78px;
    min-height: 78px;
    max-height:78px;
    max-width: 78px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 0;
    object-fit: fill;
  }
`;

