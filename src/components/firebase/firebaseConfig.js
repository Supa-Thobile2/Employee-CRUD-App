// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8DtPGGoIyIXF_q-mSMuMKSCq0O6CZWcc",
  authDomain: "portfolio-387ab.firebaseapp.com",
  projectId: "portfolio-387ab",
  storageBucket: "portfolio-387ab.appspot.com",
  messagingSenderId: "380661121561",
  appId: "1:380661121561:web:81d3c4e6d4136e5cdb2088",
  measurementId: "G-CJCFVFGHRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);