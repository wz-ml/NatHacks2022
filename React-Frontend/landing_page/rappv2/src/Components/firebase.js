// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0hHgM-2vRnBFkipPZxTJWgHNZWmn93lQ",
  authDomain: "nathacks-7ee5d.firebaseapp.com",
  projectId: "nathacks-7ee5d",
  storageBucket: "nathacks-7ee5d.appspot.com",
  messagingSenderId: "1017088852200",
  appId: "1:1017088852200:web:7863f0bdb57afd9d49895d",
  measurementId: "G-5CMJBZLNQ8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth()

export { auth }
export default db