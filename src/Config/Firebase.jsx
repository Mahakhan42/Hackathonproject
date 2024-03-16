// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-4Ep_tWkT0CUjsnNDjLOsEULWZ_Bgzkw",
  authDomain: "dbhackathon-2b3a8.firebaseapp.com",
  databaseURL: "https://dbhackathon-2b3a8-default-rtdb.firebaseio.com",
  projectId: "dbhackathon-2b3a8",
  storageBucket: "dbhackathon-2b3a8.appspot.com",
  messagingSenderId: "212338550967",
  appId: "1:212338550967:web:8eec2d71ce43353bca0532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}