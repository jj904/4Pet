import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEP0N6AfQ5Vde025mJGBG5AVP-V-FMXO8",
  authDomain: "pets-4958a.firebaseapp.com",
  projectId: "pets-4958a",
  storageBucket: "pets-4958a.appspot.com",
  messagingSenderId: "20356710494",
  appId: "1:20356710494:web:8c2691bad89c6d2e7af4cf",
  measurementId: "G-WGLVTB3CMX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerUser = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth,username, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email,
      username,
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode + errorMessage);
  }
};

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode + errorMessage);
  }
};

const signOutUser = () => {
  signOut(auth);
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode + errorMessage);
  }
};

export { auth, db, signIn, registerUser, resetPassword, signOutUser };
