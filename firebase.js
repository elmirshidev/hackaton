import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCNoLazR3o4tN3BVY5RUSWad75QN_PWeD4",
  authDomain: "devcosco.firebaseapp.com",
  projectId: "devcosco",
  storageBucket: "devcosco.appspot.com",
  messagingSenderId: "892641146157",
  appId: "1:892641146157:web:c79b5b1583fc3301538fa4",
  measurementId: "G-5B4NELSDS1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);