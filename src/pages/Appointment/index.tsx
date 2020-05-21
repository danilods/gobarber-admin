import React from 'react';
import { Container, Actions } from './styles';
import { TableContainer } from '../_layouts/styles';

import major from '../../assets/major.jpg';
import gollum from '../../assets/gollum.jpg';
import spider from '../../assets/spider-man.png';
import wolverine from '../../assets/wolverine.jpg';

const Appointment: React.FC = () => {
  return (
    <Container>
      <Actions>
        <h1>Meus Agendamentos</h1>
      </Actions>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Data/Hora</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="title">
                <div>
                  <img src={major} alt="" />
                  Major e Deizano
                </div>
              </td>
              <td className="">edward@gobarber.com</td>
              <td>+55-11-32145-8754</td>
              <td>18/05/2020 - 19:00 h</td>
            </tr>

            <tr>
              <td className="title">
                <div>
                  <img src={wolverine} alt="" />
                  Mr. Logan
                </div>
              </td>
              <td className="">dead@gobarber.com</td>
              <td>+55-11-32145-8754</td>
              <td>18/05/2020 - 19:00 h</td>
            </tr>
            <tr>
              <td className="title">
                <div>
                  <img src={gollum} alt="" />
                  Mr. Gollum
                </div>
              </td>
              <td className="">rocky@gobarber.com</td>
              <td>+55-11-32145-8754</td>
              <td>18/05/2020 - 19:00 h</td>
            </tr>
            <tr>
              <td className="title">
                <div>
                  <img src={spider} alt="" />
                  Spider Man
                </div>
              </td>
              <td className="">stark@gobarber.com</td>
              <td>+55-11-32145-8754</td>
              <td>18/05/2020 - 19:00 h</td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </Container>
  );
};

export default Appointment;
