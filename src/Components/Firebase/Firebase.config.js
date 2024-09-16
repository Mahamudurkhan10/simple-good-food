// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJGGXgQ4wBFxO-0FJ4yJS4ICeEhpgTFBY",
  authDomain: "yummy--food.firebaseapp.com",
  projectId: "yummy--food",
  storageBucket: "yummy--food.appspot.com",
  messagingSenderId: "1086800890886",
  appId: "1:1086800890886:web:6ca25313738eee106d0787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)