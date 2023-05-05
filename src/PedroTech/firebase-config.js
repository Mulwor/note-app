// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_7K3e1Qz8bm3xhzlsl1DY8i7YVDR0f4M",
  authDomain: "chatapp-81360.firebaseapp.com",
  projectId: "chatapp-81360",
  storageBucket: "chatapp-81360.appspot.com",
  messagingSenderId: "930141524710",
  appId: "1:930141524710:web:baa52028967be000432127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();