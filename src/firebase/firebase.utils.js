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

export const createUserProfileDocument = async (userAuth,additionalData) =>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt ,
        ...additionalData
      })
    }catch(err){
      console.log('error in creating user',err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


