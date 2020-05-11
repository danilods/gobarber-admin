import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/main-logo.svg';
import SidebarConfig from '../../config/SidebarConfig';

import { Container, Nav, MainLogo, User } from './styles';


const Sidebar: React.FC = () => {

  return (
    <Container>

        <div>
          <MainLogo>
            <img src={logo} alt="Gobarber"/>
            <h3>GoBarber</h3>
         </MainLogo>
            <User>
              <li>
                <img src="https://avatars0.githubusercontent.com/u/13861600?v=4" alt=""/>
                <h3>Danilo de Sousa</h3>
              </li>
            </User>

          <Nav>
            <li>
              <span>Menu</span>
            </li>
                {SidebarConfig.map((items) => (
                 <li>
                   <div>
                   {items.icon}
                   </div>
                   <Link to={items.navLink}>
                   {items.title}
                   </Link></li>
                ))}

          </Nav>
        </div>


    </Container>
  );

  };

export default Sidebar;
