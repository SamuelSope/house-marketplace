import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIwFBoqV7U9RLpCPUB633wNzGMRUAiUBE",
  authDomain: "house-marketplace-27ce4.firebaseapp.com",
  projectId: "house-marketplace-27ce4",
  storageBucket: "house-marketplace-27ce4.appspot.com",
  messagingSenderId: "813060430993",
  appId: "1:813060430993:web:fff68881d1d31bd4b17330",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
