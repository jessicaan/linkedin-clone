import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ86-FhLQOX4Oe1nPrS5rHaeRF9iFGLdw",
  authDomain: "linkedin-clone-6abd7.firebaseapp.com",
  projectId: "linkedin-clone-6abd7",
  storageBucket: "linkedin-clone-6abd7.appspot.com",
  messagingSenderId: "1059666797368",
  appId: "1:1059666797368:web:5485a0b953c0abbc7097cd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
