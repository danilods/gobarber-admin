import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import app from '../services/firebaseApi';
import { AuthStateUser } from './FirebaseAuthContext';


interface AuthState {
  token: string;
  user: object;
}

interface AuthFirebaseState {
  user: firebase.User | null;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signInFirebase(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  signOutFirebase(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@4Men:token');
    const user = localStorage.getItem('@4Men:user');

    if (token && user) {
      return { token, user: JSON.parse(user)};
    }

    return {} as AuthState;
  });

  const [fireData, setFireData] = useState<AuthFirebaseState>();

  const signIn = useCallback( async({email, password}) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@4Men:token', token);
    localStorage.setItem('@4Men:user', JSON.stringify(user));

    setData({token, user});

  }, []);

  const signInFirebase = useCallback(async(data: SignInCredentials) => {
    try {
     await app
     .auth()
     .signInWithEmailAndPassword(data.email, data.password);

     const user = app.auth().currentUser;

     if(user) {
       return user;
     }
     console.log(user);
    } catch(error) {
      console.log(error);
    }
  },[]);

  const signOutFirebase = useCallback(() => {
      try {
        app.auth().signOut();
        console.log('logout');
      }
      catch(error) {
        console.log('not logout');
      }
  }, []);

  const signOut = useCallback(() => {
      localStorage.removeItem('4Men:token');
      localStorage.removeItem('4Men:user');

      setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, signInFirebase, signOutFirebase }}>
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
