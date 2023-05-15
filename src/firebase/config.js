import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbZBQt9TgQ3OxmG72rgsA2t6u4coxqILI",
  authDomain: "ibsywlc-backup.firebaseapp.com",
  projectId: "ibsywlc-backup",
  storageBucket: "ibsywlc-backup.appspot.com",
  messagingSenderId: "1020747508704",
  appId: "1:1020747508704:web:3719b31d54fb1d6fe95985",
  measurementId: "G-6CWQNBLHX2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
