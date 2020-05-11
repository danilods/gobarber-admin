import styled, {keyframes} from 'styled-components';

import {shade} from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: strech;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;


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

export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackgroundImg}) no-repeat center;
    background-size: cover;

    animation: ${appearFromLeft} 1.5s;

`;

