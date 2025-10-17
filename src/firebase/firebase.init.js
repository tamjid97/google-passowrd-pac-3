// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmwjAC6kyn3HJTmY8_JYJOXJD1B0jGwkY",
  authDomain: "pac-3-d7083.firebaseapp.com",
  projectId: "pac-3-d7083",
  storageBucket: "pac-3-d7083.firebasestorage.app",
  messagingSenderId: "439963889787",
  appId: "1:439963889787:web:bc9a375fea63348008b2de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
