import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;

    padding: 16px;
    width: 100%;

    border: 2px solid #232129;
    color: #666360;

    display:flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }

    ${({ isErrored }) =>
      isErrored &&
      css`
        color: #c53030;
        border-color: #c53030;
      `}

    ${({ isFocused }) =>
      isFocused &&
      css`
        color: #ff9000;
        border-color: #ff9000;
      `}

    ${({ isFilled }) =>
      isFilled &&
      css`
        color: #ff9000;
      `}

    input {
      background: transparent;
      width: 100%;
      border: 0;
      color: #f4ede8;

      &::placeholder{
        color: #666360;
      }

}
    svg {
      margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 30px;

  svg {
    margin-right: 0px;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }

  &:hover span {
    opacity: 1;
  }
`;
