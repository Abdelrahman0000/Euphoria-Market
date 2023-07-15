// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdI4o6d5akbLmR90xUzY4K_mlvUN6fk28",
  authDomain: "euphoria-dcf63.firebaseapp.com",
  projectId: "euphoria-dcf63",
  storageBucket: "euphoria-dcf63.appspot.com",
  messagingSenderId: "1079735413483",
  appId: "1:1079735413483:web:06cf0f524d6103cef96cae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const Storage = getStorage(app);