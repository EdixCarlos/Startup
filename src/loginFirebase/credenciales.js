// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
