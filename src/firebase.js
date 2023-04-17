import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpzlDErtMgjiTg2HZRCnM0Fgd60eqP0NM",
  authDomain: "netflix-clone-dff27.firebaseapp.com",
  projectId: "netflix-clone-dff27",
  storageBucket: "netflix-clone-dff27.appspot.com",
  messagingSenderId: "716207863869",
  appId: "1:716207863869:web:2230e1f351d3ce46429254",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth };
export default db;
