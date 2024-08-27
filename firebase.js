// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,updateDoc,doc,getDoc } from "@firebase/firestore";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,updatePassword,updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_PROJECT_ID,REACT_APP_STORAGE_BUCKET,REACT_APP_MESSAGING_SENDER_ID,REACT_APP_APP_ID,REACT_APP_MEASUREMENT_ID } from '@env';
// import dotenv from 'dotenv';
// dotenv.config()


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // apiKey: "AIzaSyD1SWC3Zs8XrQl48fbYwu_jqrgOn9JujLI",
  // authDomain: "chatboxdb-46d2b.firebaseapp.com",
  // projectId: "chatboxdb-46d2b",
  // storageBucket: "chatboxdb-46d2b.appspot.com",
  // messagingSenderId: "626450095327",
  // appId:"1:626450095327:web:43dbbfa531c68ecfeb1d6a",
  // measurementId: "G-NXTVD6VN8W",
  apiKey: REACT_APP_API_KEY,
  authDomain:REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket:REACT_APP_STORAGE_BUCKET,
  messagingSenderId:REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId:REACT_APP_MEASUREMENT_ID


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database= getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const uploadImage = async (filepath) => {
  if (!filepath) return null;
  
  const storageRef = ref(storage, `profilePictures/${auth.currentUser.uid}`);
  const response = await fetch(filepath);
  const blob = await response.blob();
  await uploadBytes(storageRef, blob);
  const downloadUrl = await getDownloadURL(storageRef);
  return downloadUrl;
};
export { auth, signInWithEmailAndPassword, database,getDoc,updateDoc, doc, storage, ref, uploadBytes, getDownloadURL, createUserWithEmailAndPassword, updatePassword, updateProfile, sendPasswordResetEmail, uploadImage };