import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const TableContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 24px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 20px 32px;
      border: 0;
      background: #191c24;
      font-size: 16px;
      font-weight: normal;
      color: #fff;
      padding-bottom: 20px;
      vertical-align: middle;

      div {
        display: flex;
        align-items: center;

        img {
          height: 48px;
          width: 48px;
          border-radius: 50%;
          border-color: transparent;
          margin-right: 25px;
        }
      }

      a {
        display: flex;
        align-items: center;

        img {
          height: 28px;
          width: 28px;

          border-color: transparent;
          margin-right: 20px;
          margin-left: 20px;
        }
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
