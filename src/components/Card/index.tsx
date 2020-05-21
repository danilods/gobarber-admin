import React from 'react';
import * as Icon from "react-icons/md"

import { Container } from './styles';

interface CardProps {

}


const Card: React.FC = ({}) => {
  return (
    <Container>
      <h5>Agendamentos</h5>
        <div>

          <h3>12</h3>
          <Icon.MdSchedule size={40}/>

        </div>

    </Container>
  );

  };

export default Card;
