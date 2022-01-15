import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBxpqZSR1wIin8cNezJa5wVQb3cddklGnU",
  authDomain: "movie-fcfe7.firebaseapp.com",
  projectId: "movie-fcfe7",
  storageBucket: "movie-fcfe7.appspot.com",
  messagingSenderId: "209184645273",
  appId: "1:209184645273:web:303f7f701ac12a81cd5808",
  measurementId: "G-NH3RVEYJ9Q",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();
export default app;

export var fbProvider = new firebase.auth.FacebookAuthProvider();
export var googleProvider = new firebase.auth.GoogleAuthProvider();
