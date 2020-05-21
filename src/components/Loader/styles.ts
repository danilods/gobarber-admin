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
        -webkit-transform: translateY(22%);
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
      margin-top: 15%;
      height: 106px;
      width: 106px;
      border-radius: 50%;
      animation: ${pulse} 1.3s ease-in-out;
      animation-iteration-count: infinite;

      }

      h3 {
        padding-top: 20px;
        font-weight: bold;
        color: #ff9000;

      }

`;


