// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJkyhMLIOzIToc4qCTxOA0m1ZBpq_EBOw",
  authDomain: "solosphere-8a250.firebaseapp.com",
  projectId: "solosphere-8a250",
  storageBucket: "solosphere-8a250.firebasestorage.app",
  messagingSenderId: "326259798133",
  appId: "1:326259798133:web:ccd617235be45a7bba883c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);