import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const auth = firebase
  .initializeApp({
    apiKey: "REACT_APP_FIREBASE_API_KEY",
    authDomain: "REACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: "REACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: "unichat-a9133.appspot.com",
    messagingSenderId: "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    appId: "REACT_APP_FIREBASE_APP_ID",
  })
  .auth();
