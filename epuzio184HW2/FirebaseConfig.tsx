// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEjSBSWZb9xox980MAeEkpOoDtljrOE1A",
  authDomain: "epuzio184hw.firebaseapp.com",
  projectId: "epuzio184hw",
  storageBucket: "epuzio184hw.appspot.com",
  messagingSenderId: "332466999223",
  appId: "1:332466999223:web:2f1eef6ccb7efaeafea232"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getAuth(FIREBASE_APP);