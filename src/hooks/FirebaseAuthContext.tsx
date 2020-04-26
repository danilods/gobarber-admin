import React, { createContext, useCallback, useState, useEffect } from 'react';
import app from '../services/firebaseApi';


export const AuthContext = createContext({});

export interface signInData {
  name: string;
  email: string;

}

export const AuthProvider: React.FC = ({ children }) => {

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: ""
  });


  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

