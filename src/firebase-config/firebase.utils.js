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

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData
      });
    } catch (err) {
      alert(`Create user error ${err}`);
    }
  }
  return userRef;
};

export const createCollectionAndDoc = async (collectionName, dataToAdd) => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();
  dataToAdd.forEach(element => {
    const newDoc = collectionRef.doc();
    batch.set(newDoc, element);
  });
  /** Fire batched request
   * @returns {promise}, void on success, error on fail
   */
  return await batch.commit();
};

/** Make the collection data ready to use in our webApp, add [id, routeName] and convert array to object
 * @param {array} collection
 * @returns {object} collection
 */
export const transformCollectionData = collection => {
  const data = collection.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));

  return data.reduce((acc, item) => {
    acc[item.title.toLowerCase()] = {
      ...item,
      routeName: encodeURI(item.title.toLowerCase())
    };
    return acc;
  }, {});
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  login_hint: "user@example.com",
  prompt: "select_account"
});

export default firebase;
