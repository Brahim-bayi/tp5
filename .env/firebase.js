// services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔐 Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAzj3Ff3xG8CEYB7EXJDsQsMmWuSL2X7So",
  authDomain: "tp-5-550d0.firebaseapp.com",
  projectId: "tp-5-550d0",
  storageBucket: "tp-5-550d0.firebasestorage.app",
  messagingSenderId: "815650124546",
  appId: "1:815650124546:web:6c06423c5b7d55929a081b",
};

// 🚀 Initialisation Firebase
const app = initializeApp(firebaseConfig);

// 📦 Services Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
