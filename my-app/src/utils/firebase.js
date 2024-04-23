// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdzIRpwg9WGmjDqHUNi3bwRiEmEdNsHY8",
  authDomain: "homehealth-iva.firebaseapp.com",
  databaseURL: "https://homehealth-iva-default-rtdb.firebaseio.com",
  projectId: "homehealth-iva",
  storageBucket: "homehealth-iva.appspot.com",
  messagingSenderId: "87458835893",
  appId: "1:87458835893:web:bbcfa20aef9993befa7dfc",
  measurementId: "G-DYLZP9XTDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const analytics = getAnalytics(app);