
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxbGaBsMFb0cewiSALPjDZiMkaPEklOO0",
  authDomain: "ecommerce-zorro-gamer.firebaseapp.com",
  projectId: "ecommerce-zorro-gamer",
  storageBucket: "ecommerce-zorro-gamer.firebasestorage.app",
  messagingSenderId: "867607961417",
  appId: "1:867607961417:web:0654faee288a0352118498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db