import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb8AMN1WnyLBWr8RpZcpMV7k3ZSY-Delw",
  authDomain: "blog-a3a88.firebaseapp.com",
  projectId: "blog-a3a88",
  storageBucket: "blog-a3a88.appspot.com",
  messagingSenderId: "225298750408",
  appId: "1:225298750408:web:9a7c2c046b1f8fb823befd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
