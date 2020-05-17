import styled, {keyframes} from 'styled-components';

const pulse = keyframes`
    0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    -webkit-transform: translateY(0%);
    }
    80% {
        -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
        box-shadow: 0 0 0 10px rgba(204,169,44, 0);
        -webkit-transform: translateY(32%);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        -webkit-transform: translateY(0%);
    }

`;

export const Container = styled.div`

  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

    img {
      margin-top: 20%;
      height: 146px;
      width: 146px;
      border-radius: 50%;
      animation: ${pulse} 1.5s ease-out;
      animation-iteration-count: infinite;

      }

      h2 {
        margin-top: 10px;
        font-weight: bold;
        color: #ff9000;

      }

`;


