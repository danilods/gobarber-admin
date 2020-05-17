import React from 'react';
import {NavLink} from 'react-router-dom';
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

              <span>Menu</span>

                {SidebarConfig.map((items) => (
                 <li>
                    <div>
                     {items.icon}
                    </div>
                    <NavLink exact to={items.navLink} activeClassName="selected">
                     {items.title}
                     </NavLink>
                  </li>
                ))}
          </Nav>
        </div>


    </Container>
  );

  };

export default Sidebar;
