// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-llNn1P4V0PDlLrU0KfQWR8uflLadfEw",
  authDomain: "daveandsteph-86d07.firebaseapp.com",
  databaseURL:
    "https://daveandsteph-86d07-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "daveandsteph-86d07",
  storageBucket: "daveandsteph-86d07.appspot.com",
  messagingSenderId: "401534816747",
  appId: "1:401534816747:web:c4bb807942f11286f689ae",
  measurementId: "G-LCBZ7Y346K",
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase_app);

export default firebase_app;
