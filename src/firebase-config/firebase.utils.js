// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaSTvvIVTkX8aw2dXjcYHx8gizX8rgyPs",
  authDomain: "e-commerce-db-t.firebaseapp.com",
  databaseURL: "https://e-commerce-db-t.firebaseio.com",
  projectId: "e-commerce-db-t",
  storageBucket: "",
  messagingSenderId: "603310519129",
  appId: "1:603310519129:web:2a8658086e703091"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'login_hint': 'user@example.com',
  'prompt': 'select_account'
});
export const signInWithGoogle = ()  => auth.signInWithPopup(provider);

export default firebase;