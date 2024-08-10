// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACXtaCYrnLJZSawlICDYKQ_nZ2n34o6eQ",
  authDomain: "inventory-managment-ce092.firebaseapp.com",
  projectId: "inventory-managment-ce092",
  storageBucket: "inventory-managment-ce092.appspot.com",
  messagingSenderId: "575181663580",
  appId: "1:575181663580:web:08b55bec3000f62f41a599",
  measurementId: "G-6Y6071E7T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore=getFirestore(app)

export{firestore}