// Initialize Firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';

  const app = firebase.initializeApp({
  apiKey: "API_KEY",
    authDomain: "xxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxx.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "XXXXX.appspot.com",
    messagingSenderId: "MESSAGE_ID",

});

export default app;
