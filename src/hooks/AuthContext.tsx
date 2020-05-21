import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import app from '../services/firebaseApi';
import * as firebase from 'firebase/app';

interface AuthState {
  token: string;
  user:UserType;
}

interface UserType {
  email: string;
  name: string;
  id: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  userFire: firebase.User;
  user: UserType;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  signInFirebase(credentials: SignInCredentials): Promise<void>;
  signOutFirebase(): void;
  sendPasswordResetEmail(email: string): Promise<void>;
}

export interface AuthStateUser {
  initialising: boolean;
  user: firebase.User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Gobarber:token');
    const user = localStorage.getItem('@Gobarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user)};
    }

    return {} as AuthState;
  });

  const [state, setState] = useState<AuthStateUser>(() => {

    const user = firebase.auth().currentUser;
    const userLocalStorage = localStorage.getItem('@Gobarber:user');

      if(userLocalStorage) {
        return {
          initialising: !user,
          user: JSON.parse(userLocalStorage),
        };
      }

      return {} as AuthStateUser;
  });



  const signIn = useCallback( async({email, password}) => {
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Gobarber:token', token);
    localStorage.setItem('@Gobarber:user', JSON.stringify(user));

    setData({token, user});

  }, []);

  const signInFirebase = useCallback(async({email, password}) => {
    try {
     await app
     .auth()
     .signInWithEmailAndPassword(email, password);

     const user = app.auth().currentUser;
     if(user) {
      setState({initialising: !user, user: user});
     }
     localStorage.setItem('@Gobarber:user', JSON.stringify(user));

     console.log(user);
    } catch(error) {
      console.log(error);
    }
  },[]);


  const signOut = useCallback(() => {
      localStorage.removeItem('@Gobarber:token');
      localStorage.removeItem('@Gobarber:user');
      setData({} as AuthState);

  }, []);

  const signOutFirebase = useCallback(() => {
      localStorage.removeItem('@Gobarber:user');
      setState({} as AuthStateUser);
      app.auth().signOut();
  }, []);

  const sendPasswordResetEmail = useCallback(async(email) => {
    try {
     await app.auth().sendPasswordResetEmail(email);
     localStorage.removeItem('@Gobarber:user');
    }catch(error) {
      console.log(error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user: data.user,
      userFire: state.user,
      signIn, signOut,
      signInFirebase,
      signOutFirebase,
      sendPasswordResetEmail,

    }}
      >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AutnProvider');

  }

  return context;
}
