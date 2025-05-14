// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4OB82wKVg6HR7Hp2KKc6fXrqARa4XyJA",
  authDomain: "aulasm2025-caedd.firebaseapp.com",
  projectId: "aulasm2025-caedd",
  storageBucket: "aulasm2025-caedd.firebasestorage.app",
  messagingSenderId: "235814805775",
  appId: "1:235814805775:web:6f7b3b99a46c70249a5e7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const bd = getFirestore(app);
