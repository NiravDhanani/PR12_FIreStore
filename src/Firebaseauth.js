// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgFWDt2mxENulz9o9rdrlAUPtSGXc5xzE",
  authDomain: "pr12firestore.firebaseapp.com",
  projectId: "pr12firestore",
  storageBucket: "pr12firestore.appspot.com",
  messagingSenderId: "1050097348437",
  appId: "1:1050097348437:web:7d5c06874095cc9a2809dc",
  measurementId: "G-JEYKGK9MEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app