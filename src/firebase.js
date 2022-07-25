// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYynGHKF_HThZxbOTowMt8CukOSMEf0c8",
  authDomain: "test-3f59d.firebaseapp.com",
  projectId: "test-3f59d",
  storageBucket: "test-3f59d.appspot.com",
  messagingSenderId: "365475870307",
  appId: "1:365475870307:web:94daf5a344bff6794caa56",
  measurementId: "G-DGSVRNNNMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);