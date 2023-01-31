// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrI3RX7FrHwAus7BU6qfML-WhDNZCpnOw",
  authDomain: "todoapp-f36da.firebaseapp.com",
  projectId: "todoapp-f36da",
  storageBucket: "todoapp-f36da.appspot.com",
  messagingSenderId: "217810064463",
  appId: "1:217810064463:web:f88427fd995d44f7cc463a",
  measurementId: "G-5XCWE69B4Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
