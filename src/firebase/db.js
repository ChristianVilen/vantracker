import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMkLSy1XY9JoVthOSKaPS4z1pSCr4GSkc",
  authDomain: "vantracker-5175f.firebaseapp.com",
  databaseURL: "https://vantracker-5175f.firebaseio.com",
  projectId: "vantracker-5175f",
  storageBucket: "vantracker-5175f.appspot.com",
  messagingSenderId: "51219507964",
  appId: "1:51219507964:web:494e0f780b9d538718c579",
  measurementId: "G-6WGMLRZHNY"
};
// Initialize Firebase

export const db = firebase.initializeApp(firebaseConfig).firestore();
