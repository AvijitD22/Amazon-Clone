import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDof6ZSDTljWoUru6__kR5QVyhdHzu4-L0",
  authDomain: "clone-5baf6.firebaseapp.com",
  projectId: "clone-5baf6",
  storageBucket: "clone-5baf6.appspot.com",
  messagingSenderId: "253819557794",
  appId: "1:253819557794:web:39c92865e46408e90984fb",
  measurementId: "G-MWEE5JQDKK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
