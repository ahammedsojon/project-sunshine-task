import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAppAutthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAppAutthentication;
