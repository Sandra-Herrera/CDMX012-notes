import { initializeApp }  from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAU7bFH9aKwPfmNMrFCAXQWXx-ucdgqma0",
    authDomain: "lab-notes-5bb30.firebaseapp.com",
    projectId: "lab-notes-5bb30",
    storageBucket: "lab-notes-5bb30.appspot.com",
    messagingSenderId: "575492208762",
    appId: "1:575492208762:web:f9aab9214afff71a8ee3c3"
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const signIn = signInWithPopup;

export const auth = getAuth();

export const db = getFirestore(app);