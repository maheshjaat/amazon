import firebase  from "firebase";
// import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyC8T695_MWjIRWrSw3mFZqSMPNMPfrRkbE",
  authDomain: "clone-c867c.firebaseapp.com",
  projectId: "clone-c867c",
  storageBucket: "clone-c867c.appspot.com",
  messagingSenderId: "62012769822",
  appId: "1:62012769822:web:177eab5606ac134662d00f",
  measurementId: "G-TSVL46BJM3"
})

// const db =firebaseApp.firestore();
const auth =firebase.auth();

export { auth}