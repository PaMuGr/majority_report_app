// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyOgBBXIo5C-LtsbrdxZepRZoWeF7r17M",
  authDomain: "majority-report-33739.firebaseapp.com",
  projectId: "majority-report-33739",
  storageBucket: "majority-report-33739.firebasestorage.app",
  messagingSenderId: "96713972972",
  appId: "1:96713972972:web:ecdba62f0a3c29d01259c9",
  measurementId: "G-Z379S3VVY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);