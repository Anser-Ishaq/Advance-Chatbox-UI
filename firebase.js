// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,updateDoc,doc,getDoc } from "@firebase/firestore";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,updatePassword,updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import dotenv from 'dotenv';
// dotenv.config()


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // apiKey: "AIzaSyD1SWC3Zs8XrQl48fbYwu_jqrgOn9JujLI",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_CHAT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENTT_IDD,
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