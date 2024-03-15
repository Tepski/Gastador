import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj1OMjonL8jJiDgwD2cdWir55FCDXTK0k",
  authDomain: "gastador-e3ac0.firebaseapp.com",
  projectId: "gastador-e3ac0",
  storageBucket: "gastador-e3ac0.appspot.com",
  messagingSenderId: "286592604478",
  appId: "1:286592604478:web:cb90a21ddbe664c325746f",
  measurementId: "G-QGY5JXCFRE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
