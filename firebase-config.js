import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3D6ZLPYXEBs8OY15q49YqgGFlY8h3LPQ",
  authDomain: "fire-base-project-73391.firebaseapp.com",
  projectId: "fire-base-project-73391",
  storageBucket: "fire-base-project-73391.firebasestorage.app",
  messagingSenderId: "1057286849740",
  appId: "1:1057286849740:web:5614afceb91ba1caabee69",
  measurementId: "G-DHB6QSJ14Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot };
