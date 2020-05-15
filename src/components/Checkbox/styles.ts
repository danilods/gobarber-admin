import styled, {css} from 'styled-components';

export const Container = styled.div`



    input {
      background: #232129;
      width: 28px;
      height: 28px;
      cursor: pointer;
      border: 2px solid #ff9000;
      border-radius: 10px;

      display:flex;
      align-items: center;

     &:focus {
       background-color: #232129;
       border-color: #ff9000;
     }
  }

`;


