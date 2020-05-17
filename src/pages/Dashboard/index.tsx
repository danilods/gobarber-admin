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

import {Container,  DataCard, CardItem,
  User,
  Card,
  CardContainer,
  RankingServices,
  TableContainer,
  ServiceItem
 } from './styles';

const Dashboard: React.FC = () =>
  {
      return (
        <Container>
        <CardContainer>
          <Card>
              <User>
                  <img
                    src={
                        img
                    }
                    alt="Danilo"
                  />
                  <div>
                    <strong><div></div>Edward Mãos de Tesoura</strong>
                    <h4>Em atendimento</h4>
                  </div>
              </User>
          </Card>

          <Card>
            <User>
                  <img
                    src={
                        img1
                    }
                    alt="Danilo"
                  />
                  <div>
                    <strong><div></div>Mr. Deadpool</strong>
                    <h4>Em atendimento</h4>
                  </div>
              </User>
                  </Card>

                  <Card>
            <User>
                  <img
                    src={
                        img2
                    }
                    alt="Danilo"
                  />
                  <div>
                    <strong><div></div>Rocky Balboa</strong>
                    <h4>Em atendimento</h4>
                  </div>
              </User>
                  </Card>

                  <Card>
            <User>
                  <img
                    src={
                        img3
                    }
                    alt="Danilo"
                  />
                  <div>
                    <strong><div></div>Tony Stark</strong>
                    <h4>Em atendimento</h4>
                  </div>
              </User>
                  </Card>

          </CardContainer>

          <DataCard>
          <CardItem>
            <header>
              <p>Atendimentos nos últimos 7 dias</p>
              <img src={users} alt="Income" />
            </header>
            <h1 data-testid="balance-income">48</h1>
          </CardItem>
          <CardItem>
            <header>
              <p>Faturamento diário</p>
              <img src={money} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">R$ 1.000,00</h1>
          </CardItem>
          <CardItem >
            <header>
              <p>Agendamentos</p>
              <img src={schedule} alt="Total" />
            </header>
            <h1 data-testid="balance-total">22</h1>
          </CardItem>
        </DataCard>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Preço</th>
                <th>Profissional</th>

              </tr>
            </thead>

            <tbody>

                <tr >
                  <td className="title">Corte de cabelo</td>
                  <td className="">R$ 35,00</td>
                  <td>Deadpool</td>
                </tr>

                <tr >
                  <td className="title">Corte de cabelo</td>
                  <td className="">R$ 35,00</td>
                  <td>Deadpool</td>
                </tr>
                <tr >
                  <td className="title">Corte de cabelo</td>
                  <td className="">R$ 35,00</td>
                  <td>Deadpool</td>
                </tr>
                <tr >
                  <td className="title">Corte de cabelo</td>
                  <td className="">R$ 35,00</td>
                  <td>Deadpool</td>
                </tr>
                <tr >
                  <td className="title">Corte de cabelo</td>
                  <td className="">R$ 35,00</td>
                  <td>Deadpool</td>
                </tr>

            </tbody>
          </table>
          <RankingServices>
          <CardItem>
            <ServiceItem>
              <li>
                <img src={service1} alt=""/>
                <h3>20</h3>
              </li>
            </ServiceItem>

          </CardItem>
          <CardItem>
          <ServiceItem>
              <li>
                <img src={service2} alt=""/>
                <h3>15</h3>
              </li>
            </ServiceItem>
          </CardItem>
          <CardItem>
          <ServiceItem>
             <li>
                <img src={service3} alt=""/>
                <h3>15</h3>
              </li>
            </ServiceItem>
          </CardItem>
          <CardItem>
          <ServiceItem>
              <li>
                <img src={service4} alt=""/>
                <strong>15</strong>
              </li>
            </ServiceItem>
          </CardItem>

          </RankingServices>
        </TableContainer>





        </Container>

     );
  }


export default Dashboard;
