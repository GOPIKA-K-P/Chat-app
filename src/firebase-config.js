// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDwImThEi_rO1aSG-pmC1PogyLRvAmH-14",
  authDomain: "chat-app-2b505.firebaseapp.com",
  projectId: "chat-app-2b505",
  storageBucket: "chat-app-2b505.appspot.com",
  messagingSenderId: "535275234066",
  appId: "1:535275234066:web:da46a48734275742c509cb",
  measurementId: "G-K4S9M5R6DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);