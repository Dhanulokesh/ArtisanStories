// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCQfuox3ZR_FCLNam0NM7PPGKBMmiD1TgA",
  authDomain: "storycraft-demo.firebaseapp.com",
  projectId: "storycraft-demo",
  storageBucket: "storycraft-demo.firebasestorage.app",
  messagingSenderId: "118613851189",
  appId: "1:118613851189:web:d7db65963e3c23383ec57c",
  measurementId: "G-GHCJ0FBG1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;