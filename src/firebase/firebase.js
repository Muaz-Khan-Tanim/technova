// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTtdp840qCP0VOnoW2zXzk0GV7q2b_ekM",
  authDomain: "technova-8781b.firebaseapp.com",
  projectId: "technova-8781b",
  storageBucket: "technova-8781b.appspot.com",
  messagingSenderId: "596030506787",
  appId: "1:596030506787:web:06a7769bce1f696d292e96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
