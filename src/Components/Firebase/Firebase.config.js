// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0x8ehAYTjWbmeobWBm2Sv7jR1rlHtWKs",
  authDomain: "simple-good-food.firebaseapp.com",
  projectId: "simple-good-food",
  storageBucket: "simple-good-food.appspot.com",
  messagingSenderId: "876206111210",
  appId: "1:876206111210:web:3d3db264fc8f591ec51a93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)