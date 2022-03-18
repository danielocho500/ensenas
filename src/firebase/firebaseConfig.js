import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmiWNlyuQl-2fjK9eDkOAEH6apK9jUeIA",
  authDomain: "senaletica-ensenas-braille.firebaseapp.com",
  projectId: "senaletica-ensenas-braille",
  storageBucket: "senaletica-ensenas-braille.appspot.com",
  messagingSenderId: "457902795841",
  appId: "1:457902795841:web:52b8ef6fc98751fa786ac0",
  measurementId: "G-Y1Q8H3395W"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const storage = getStorage(app);

