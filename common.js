// common.js (ES module) — paste your Firebase config below
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { 
  getFirestore, doc, setDoc, addDoc, updateDoc, getDoc, getDocs, 
  collection, onSnapshot, query, where, orderBy, deleteDoc, serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { 
  getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBt2vN663q_9g-bvuZEcOf64zQTVqdpyD0",
  authDomain: "mcq-test-project.firebaseapp.com",
  projectId: "mcq-test-project",
  storageBucket: "mcq-test-project.firebasestorage.app",
  messagingSenderId: "378769361762",
  appId: "1:378769361762:web:0968bab7a6d3bf5bb0ba3b"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Expose to window for other pages (simple approach)
window.__FIREBASE__ = { 
  app, db, auth,
  fns: { doc, setDoc, addDoc, updateDoc, getDoc, getDocs, collection, onSnapshot, query, where, orderBy, deleteDoc, serverTimestamp, signInWithEmailAndPassword, onAuthStateChanged, signOut }
};

export { app, db, auth };
