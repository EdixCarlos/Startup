// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIA7hxSljJkB1hA2HN3AAJfeMAVLWuLCE",
  authDomain: "startup-e15db.firebaseapp.com",
  projectId: "startup-e15db",
  storageBucket: "startup-e15db.appspot.com",
  messagingSenderId: "73494006324",
  appId: "1:73494006324:web:26fddcd86a1f13e5c0d861",
  measurementId: "G-TCQ8MJ7B60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);