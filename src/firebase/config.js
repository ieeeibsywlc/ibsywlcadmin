import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvKqZM9JQRMA-q4NT2tCsc6kSrgFyLegc",
  authDomain: "ibsywlc.firebaseapp.com",
  projectId: "ibsywlc",
  storageBucket: "ibsywlc.appspot.com",
  messagingSenderId: "723310530615",
  appId: "1:723310530615:web:eb6eecc70f5117f2bf2fb2",
  measurementId: "G-BYYM7TBKJ6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
