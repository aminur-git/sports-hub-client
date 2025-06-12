// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIBfm4dnqMLsUH9RQTx9Fi8IMtp-NfolQ",
  authDomain: "sports-hub-bd944.firebaseapp.com",
  projectId: "sports-hub-bd944",
  storageBucket: "sports-hub-bd944.firebasestorage.app",
  messagingSenderId: "901158950701",
  appId: "1:901158950701:web:f909ec999cf0850aace5a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)