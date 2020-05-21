import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import * as firebase from 'firebase/app';

interface UserContext {
  user?: firebase.User;
  initialising?: boolean;
}

export const userContext = createContext<UserContext>({
  user: undefined
});

interface UserData {
  email: string;
  password: string;
}

const provider = new firebase.auth.GoogleAuthProvider();

const useSession = () => {
  const {user} = useContext(userContext);
  return user;
}

export const loginWithGoogle = useCallback( async() => {
  try {
    await firebase.auth().signInWithPopup(provider);
  } catch(err) {
    console.error(err);
    throw err;
  }
}, []);

export const loginWithEmail = useCallback(async(data: UserData) => {
  try {
    await firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password);
  } catch(err) {
    console.error(err);
    throw err;
  }
}, []);

export const createUserWithEmail = useCallback(async(data: UserData) => {
  try {
    await firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password);
  } catch (err) {
    console.error(err);
  }
}, []);

export const signOut = useCallback(() => {
  firebase.auth().signOut();
}, [])
