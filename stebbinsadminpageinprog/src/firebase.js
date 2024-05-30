// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdwZNvmygP3z-jCiKEo-fcDduI4FM9P1M",
  authDomain: "stebbinsadmininprog.firebaseapp.com",
  projectId: "stebbinsadmininprog",
  storageBucket: "stebbinsadmininprog.appspot.com",
  messagingSenderId: "561910181567",
  appId: "1:561910181567:web:c6c6b21f6082771c5b200a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const firestore = getFirestore(app);
export default app;