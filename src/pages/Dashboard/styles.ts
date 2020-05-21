import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
    0% {
    -moz-box-shadow: 0 0 0 0 #ff9000;
    box-shadow: 0 0 0 0 #ff9000;
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

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 20px;
  background: #000;
`;

export const List = styled.div`
  margin-top: 20px;
  margin-left: 34px;
  margin-top: 38px;
  display: flex;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 18px;
  margin-top: 0px;
`;

export const Card = styled.div`
  background: #17181c;
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
  grid-gap: 18px;
  margin-top: 20px;
`;

export const CardItem = styled.div`
  background: #17181c;
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
`;

export const TableContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
  table {
    width: 75%;
    border-spacing: 0 8px;

    thead {
      h2 {
        color: #fff;
      }
    }
    tr {
      border-radius: 20%;
    }

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 18px;
      text-align: left;
      font-size: 16px;
      line-height: 20px;
    }

    td {
      padding: 18px 12px;
      border: 0;
      background: #17181c;
      font-size: 16px;
      font-weight: normal;
      color: #fff;
      padding-bottom: 20px;
      vertical-align: middle;

      div {
        display: flex;
        align-items: center;

        img {
          height: 42px;
          width: 42px;
          border-radius: 50%;
          border-color: transparent;
          margin-right: 15px;
        }
      }

      a {
        display: flex;
        align-items: center;

        img {
          height: 28px;
          width: 28px;

          border-color: transparent;
          margin-right: 10px;
        }
      }
    }
  }
`;

export const ListCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 8px;
`;

export const User = styled.div`
  list-style: none;
  display: flex;
  margin-left: 0px;
  padding-left: 5px;
  div {
    text-align: left;
    margin-right: 30px;

    div {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      border-color: transparent;
      animation: ${pulse} 1.5s ease-in-out;
      animation-iteration-count: infinite;

      &.available {
        background: #7cfc00;
      }

      &.working {
        background: #cf3261;
      }

      &.offline {
        background: #666360;
      }
    }

    strong {
      display: block;
      font-size: 18px;
      font-weight: bold;
      color: #fff;

      div {
        margin-left: -25px;
      }
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
    max-height: 78px;
    max-width: 78px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 0;
    object-fit: fill;
  }
`;

export const ServiceItem = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  padding-left: 5px;
  height: 120px;
  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h4 {
      display: block;
      margin-top: 10px;
      font-weight: normal;
      color: #fff;
    }
    img {
      min-width: 78px;
      min-height: 78px;
      max-height: 78px;
      max-width: 78px;
      border-radius: 20%;
      margin-top: 20px;
      margin-right: 15px;
      margin-left: 0;
      object-fit: fill;
    }
  }
`;

export const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  section {
    width: 50%;
  }
`;

export const RankingServices = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18px;
  margin-left: 18px;
  margin-top: 12;
  width: 46%;
  height:

  h2 {
    color: #fff;
  }
`;
