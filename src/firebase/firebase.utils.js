import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAhItMASFTzUkdr40BlRC-61utEOoEQ08w",
  authDomain: "crwn-db-613fa.firebaseapp.com",
  projectId: "crwn-db-613fa",
  storageBucket: "crwn-db-613fa.appspot.com",
  messagingSenderId: "457227806121",
  appId: "1:457227806121:web:987d68135ed6aab54410b8",
  measurementId: "G-GW7TB01LEM"
}


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


