// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwnF0EG9514xYgqO-hpD3crE3lX31g2-o",
    authDomain: "chat-rooms-app-6aba3.firebaseapp.com",
    projectId: "chat-rooms-app-6aba3",
    storageBucket: "chat-rooms-app-6aba3.appspot.com",
    messagingSenderId: "782342334945",
    appId: "1:782342334945:web:ae02e696b02b92d3b70aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);