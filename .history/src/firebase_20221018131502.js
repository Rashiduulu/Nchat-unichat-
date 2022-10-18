import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const auth = firebase
  .initializeApp({
    apiKey: "REACT_APP_FIREBASE_API_KEY",
    authDomain: "unichat-a9133.firebaseapp.com",
    projectId: "unichat-a9133",
    storageBucket: "unichat-a9133.appspot.com",
    messagingSenderId: "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    appId: "REACT_APP_FIREBASE_APP_ID",
  })
  .auth();
