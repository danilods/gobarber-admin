import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/';
//import SignUp from './pages/SignUp/';
import firebase from 'firebase/app';

import AppProvider from './hooks/index'


const App: React.FC = () => (

  <>
    <AppProvider>
        <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>

  );

export default App;
