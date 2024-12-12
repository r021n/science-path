// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FIREBASE_API_KEY } from "@env";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "business-app-b2908.firebaseapp.com",
    projectId: "business-app-b2908",
    storageBucket: "business-app-b2908.appspot.com",
    messagingSenderId: "845171140057",
    appId: "1:845171140057:web:bfc993414666e5f7b3e5c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);