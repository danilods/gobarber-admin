import React from 'react';

import img from '../../assets/edward.jpg';
import img1 from '../../assets/deadpool-1.jpg';
import img2 from '../../assets/rocky.jpg';
import img3 from '../../assets/stark.jpg';

import users from '../../assets/users.svg';
import money from '../../assets/dollar-sign.svg';
import schedule from '../../assets/clock.svg';
import service1 from '../../assets/creme.svg';
import service2 from '../../assets/navalha.svg';
import service3 from '../../assets/placa.svg';
import service4 from '../../assets/barbeiro.svg';

import major from '../../assets/major.jpg';
import gollum from '../../assets/gollum.jpg';
import spider from '../../assets/spider-man.png';
import wolverine from '../../assets/wolverine.jpg';

import {
  Container,
  DataCard,
  CardItem,
  User,
  Card,
  CardContainer,
  RankingServices,
  TableContainer,
  ServiceItem,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <CardContainer>
        <Card>
          <User>
            <img src={img} alt="Danilo" />
            <div>
              <strong>
                <div className="working"></div>Edward Mãos de Tesoura
              </strong>
              <h4>Em atendimento</h4>
            </div>
          </User>
        </Card>

        <Card>
          <User>
            <img src={img1} alt="Danilo" />
            <div>
              <strong>
                <div className="offline"></div>Mr. Deadpool
              </strong>
              <h4>Indisponível</h4>
            </div>
          </User>
        </Card>

        <Card>
          <User>
            <img src={img2} alt="Danilo" />
            <div>
              <strong>
                <div className="working"></div>Rocky Balboa
              </strong>
              <h4>Em atendimento</h4>
            </div>
          </User>
        </Card>

        <Card>
          <User>
            <img src={img3} alt="Danilo" />
            <div>
              <strong>
                <div className="available"></div>Tony Stark
              </strong>
              <h4>Disponível</h4>
            </div>
          </User>
        </Card>
      </CardContainer>

      <DataCard>
        <CardItem>
          <header>
            <p>Atendimentos nos últimos 7 dias</p>
            <img src={users} alt="" />
          </header>
          <h1>48</h1>
        </CardItem>
        <CardItem>
          <header>
            <p>Faturamento diário</p>
            <img src={money} alt="" />
          </header>
          <h1>R$ 1.000,00</h1>
        </CardItem>
        <CardItem>
          <header>
            <p>Agendamentos</p>
            <img src={schedule} alt="" />
          </header>
          <h1>22</h1>
        </CardItem>
      </DataCard>

      <TableContainer>
        <table>
          <thead>

            <tr>
              <th>Cliente</th>
              <th>Horário</th>
              <th>Serviço</th>


            </tr>
          </thead>

          <tbody>
            <tr>
              <td ><div>
                  <img src={major} alt="" />
                  Major e Deizano
                </div></td>
              <td >18/05/2020 - 10:00h</td>
              <td>Corte de cabelo</td>
            </tr>

            <tr>
              <td ><div>
                  <img src={gollum} alt="" />
                  Mr. Gollum
                </div></td>
              <td >18/05/2020 - 10:00h</td>
              <td>Corte de cabelo</td>
            </tr>
            <tr>
              <td ><div>
                  <img src={spider} alt="" />
                  Spider Man
                </div></td>
              <td >18/05/2020 - 10:00h</td>
              <td>Corte de cabelo</td>
            </tr>
            <tr>
              <td ><div>
                  <img src={wolverine} alt="" />
                  Mr. Logan
                </div></td>
              <td >18/05/2020 - 10:00h</td>
              <td>Corte de cabelo</td>
            </tr>

          </tbody>
        </table>
        <RankingServices>
          <CardItem>
            <ServiceItem>
              <li>
                <h3>Tratamentos</h3>
                <img src={service1} alt="" />
                <h3>20</h3>
              </li>
            </ServiceItem>
          </CardItem>
          <CardItem>
            <ServiceItem>
              <li>
                <h3>Barba</h3>
                <img src={service2} alt="" />
                <h3>15</h3>
              </li>
            </ServiceItem>
          </CardItem>
          <CardItem>
            <ServiceItem>
              <li>
                <h3>Cabelo</h3>
                <img src={service3} alt="" />
                <h3>15</h3>
              </li>
            </ServiceItem>
          </CardItem>
          <CardItem>
            <ServiceItem>
              <li>
                <h3>Produtos</h3>
                <img src={service4} alt="" />
                <h3>55</h3>
              </li>
            </ServiceItem>
          </CardItem>
        </RankingServices>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
