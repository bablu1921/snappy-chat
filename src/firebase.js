// import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "snappy-chat-20927.firebaseapp.com",
  projectId: "snappy-chat-20927",
  storageBucket: "snappy-chat-20927.appspot.com",
  messagingSenderId: "711545573366",
  appId: "1:711545573366:web:6d8f3c65bb24413113c1d7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
