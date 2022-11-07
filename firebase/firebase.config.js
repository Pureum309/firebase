// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV7guPRSBx51PhLeeuxdquVovPbs6T2PU",
  authDomain: "login-data-e83a7.firebaseapp.com",
  projectId: "login-data-e83a7",
  storageBucket: "login-data-e83a7.appspot.com",
  messagingSenderId: "84725908392",
  appId: "1:84725908392:web:93b2fcd12d44e13f34939d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);