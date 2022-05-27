import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7jpaOOOMMb7IoBvtnQeChcUT_ZfpyLfA",
  authDomain: "react-redux-thunk-auth.firebaseapp.com",
  databaseURL: "https://react-redux-thunk-auth-default-rtdb.firebaseio.com",
  projectId: "react-redux-thunk-auth",
  storageBucket: "react-redux-thunk-auth.appspot.com",
  messagingSenderId: "426226730209",
  appId: "1:426226730209:web:59a19663c500e2a46fe3a0",
  measurementId: "G-2YN3FDTRJ0"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp
// const googleProvider = firebase.googleProvider;
export  { projectAuth, projectFirestore, timeStamp }
 