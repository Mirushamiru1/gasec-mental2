// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ0ct3dp-6ELEu0ImJmPl_xFh_W9nOezY",
  authDomain: "mental-app-52732.firebaseapp.com",
  projectId: "mental-app-52732",
  storageBucket: "mental-app-52732.firebasestorage.app",
  messagingSenderId: "851967923669",
  appId: "1:851967923669:web:d706f6624f1689fa4dd95c",
  measurementId: "G-2SXB3H3845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
