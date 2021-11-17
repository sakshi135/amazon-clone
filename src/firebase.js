import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF6evbqPoIu8QSNjcDKUHxItH0a40arVc",
  authDomain: "clone-70df0.firebaseapp.com",
  projectId: "clone-70df0",
  storageBucket: "clone-70df0.appspot.com",
  messagingSenderId: "1052283840781",
  appId: "1:1052283840781:web:b4f9f48580f26ba0362844",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
