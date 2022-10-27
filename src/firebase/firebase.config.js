// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdcLy2sF4b9OCsSVSRlrkb7a5DwnUWYI8",
  authDomain: "teach-density.firebaseapp.com",
  projectId: "teach-density",
  storageBucket: "teach-density.appspot.com",
  messagingSenderId: "401417721742",
  appId: "1:401417721742:web:32e27c74ca4ad0f58636df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;