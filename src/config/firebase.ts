// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1FMNb8RtOrBAA2MpvnlBJan5-5ZLRBf0",
  authDomain: "web-auth-a9416.firebaseapp.com",
  projectId: "web-auth-a9416",
  storageBucket: "web-auth-a9416.firebasestorage.app",
  messagingSenderId: "360014193288",
  appId: "1:360014193288:web:fa216662aa4b4c3e07353d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();