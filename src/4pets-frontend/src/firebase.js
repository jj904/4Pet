import {
  initializeApp
} from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
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

const registerUser = async (username, email, password, zipcode) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  try {
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      uid: user.uid, 
      username : username,
      zipcode : zipcode,
    }); 
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const signOutUser = () => {
  signOut(auth);
};

const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
  alert("Password reset link sent!");

};

export {
  auth,
  db,
  signIn,
  registerUser,
  resetPassword,
  signOutUser
};