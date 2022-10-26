import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3IOrRWji1CI1woI1IS56h8n7CjUJDYd0",
  authDomain: "chat-app-c29ea.firebaseapp.com",
  projectId: "chat-app-c29ea",
  storageBucket: "chat-app-c29ea.appspot.com",
  messagingSenderId: "80717713763",
  appId: "1:80717713763:web:22fe2fa2f30301fa204356"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
