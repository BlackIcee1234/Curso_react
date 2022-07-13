import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';

import{
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiu_odFrofM0vRzfIwCoRyebaeQaqOVNU",
    authDomain: "crwn-clothing-axel-db.firebaseapp.com",
    projectId: "crwn-clothing-axel-db",
    storageBucket: "crwn-clothing-axel-db.appspot.com",
    messagingSenderId: "1095663758276",
    appId: "1:1095663758276:web:939b0fc4681dcf4aa6d291"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
  }