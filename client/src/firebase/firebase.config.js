// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7JJ9s5oOoJstYdZoY4L0SuXo8XD70kyI",
  authDomain: "bookstore-894af.firebaseapp.com",
  projectId: "bookstore-894af",
  storageBucket: "bookstore-894af.appspot.com",
  messagingSenderId: "516233045724",
  appId: "1:516233045724:web:9e180de9bc7f109b81f619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;