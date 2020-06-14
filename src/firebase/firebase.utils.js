import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAlNELHzzDk32ISjnEh991QmQ2EUCsdR-0",
    authDomain: "jrny-db.firebaseapp.com",
    databaseURL: "https://jrny-db.firebaseio.com",
    projectId: "jrny-db",
    storageBucket: "jrny-db.appspot.com",
    messagingSenderId: "788963324998",
    appId: "1:788963324998:web:e6b16fd366f11b1c5ec647",
    measurementId: "G-V7KT3E6WSD"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;