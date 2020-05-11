import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import firebase from 'firebase/app';

import AppProvider from './hooks/index'

import Routes from './routes';

const App: React.FC = () => (

  <Router>
    <AppProvider>
        <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>


  );

export default App;
