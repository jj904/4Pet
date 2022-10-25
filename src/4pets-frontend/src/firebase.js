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
import * as CONSTANTS from "./contexts/Constants.js"
import { CometChat } from "@cometchat-pro/chat";
import { getStorage } from "firebase/storage";

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

const storage = getStorage(app);


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


    var users = new CometChat.User(user.uid);
    users.setName(username);
    await CometChat.createUser(users, CONSTANTS.AUTH_KEY).then(
      users => {
            console.log("user created", users);
        },error => {
            console.log("error", error);
        }
    )
    await CometChat.login(user.uid, CONSTANTS.AUTH_KEY).then(
      users => {
        console.log("Login Successful:", { users });    
      },
      error => {
        console.log("Login failed with exception:", { error });    
      }
    );


  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const signIn = async (email, password) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await CometChat.login(user.uid, CONSTANTS.AUTH_KEY).then(
    users => {
      console.log("Login Successful:", { users });    
    },
    error => {
      console.log("Login failed with exception:", { error });    
    }
  );
  
};

const signOutUser = () => {
  signOut(auth);
  CometChat.logout();
};

const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
  alert("Password reset link sent!");

};

export {
  auth,
  db,
  storage,
  signIn,
  registerUser,
  resetPassword,
  signOutUser
};