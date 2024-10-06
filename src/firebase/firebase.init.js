// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ4fenGcSPbvNApV0VQ9L241iVa8VyHNY",
  authDomain: "bootcamp-courseselling-client.firebaseapp.com",
  projectId: "bootcamp-courseselling-client",
  storageBucket: "bootcamp-courseselling-client.appspot.com",
  messagingSenderId: "780238118816",
  appId: "1:780238118816:web:64b45971109880008c4ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;