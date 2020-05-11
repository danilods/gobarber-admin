import React, { createContext, useState, useEffect, useCallback } from 'react';
import app from '../services/firebaseApi';


export const authContext = createContext({});

export interface signInData {
  email: string;
  password: string;

}

export interface AuthStateUser {
  user: object;
}

export const AuthProvider: React.FC = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  const signInFirebase = useCallback(async(data: signInData) => {
    try {
     await app
     .auth()
     .signInWithEmailAndPassword(data.email, data.password);

     const user = app.auth().currentUser;
     console.log(user);
    } catch(error) {
      console.log(error);
    }
  },[]);

  if(pending){
    return <>Loading...</>
  }

  return (
    <authContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </authContext.Provider>
  );
};

