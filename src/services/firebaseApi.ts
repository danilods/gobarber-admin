// Initialize Firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';

  const app = firebase.initializeApp({
  apiKey: "AIzaSyA-e2hmJQP4D_37ZIMV1JxPzGR2D4O7kC8",
    authDomain: "men-app-1fce4.firebaseapp.com",
    databaseURL: "https://men-app-1fce4.firebaseio.com",
    projectId: "men-app-1fce4",
    storageBucket: "men-app-1fce4.appspot.com",
    messagingSenderId: "1033048085356",

});

export default app;
