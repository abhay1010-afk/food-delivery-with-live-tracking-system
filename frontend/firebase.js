// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlYksZMupbZ7C9kRzbmZRFGPQsxrKSquw",
  authDomain: "tomato-food.firebaseapp.com",
  projectId: "tomato-food",
  storageBucket: "tomato-food.firebasestorage.app",
  messagingSenderId: "1047308204482",
  appId: "1:1047308204482:web:888432c8e1caeca5fd3e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {app,auth};