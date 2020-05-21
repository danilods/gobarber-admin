import React from 'react';

import {Wrapper, Container, Content} from './styles';

interface ModalProps {
  children: JSX.Element;
  onClose: () => void;
  id: string;
}

interface HTMLModalInterface {
  target: HTMLDivElement;
}

export const Modal: React.FC<ModalProps> = ({id, onClose= () =>{}, children}) => {

  const handleOutSide = (e: HTMLModalInterface) => {
    if(e.target.id ===id) {
      onClose();
    }
  }

  return (
    <Wrapper id={id} onClick={() => handleOutSide}>
      <Container>
        <button className="close" type="button" onClick={onClose}>Close</button>
        <Content>
          {children}
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Modal;
