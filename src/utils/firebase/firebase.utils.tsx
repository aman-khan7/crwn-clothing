import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBI71xXFOfF2yYmUoux3_AF-bfIYCDUDDI",
  authDomain: "crwn-clothing-db-befc2.firebaseapp.com",
  projectId: "crwn-clothing-db-befc2",
  storageBucket: "crwn-clothing-db-befc2.appspot.com",
  messagingSenderId: "860247729347",
  appId: "1:860247729347:web:e69dc51f7471b36e39ee76",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoolePopup = () => signInWithPopup(auth, provider);
export const signInWithGooleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: UserCredential,
  additonalInformation: any = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.user.uid);

  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { user } = userAuth;
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additonalInformation,
      });
    } catch (error: any) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
