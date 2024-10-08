import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { title } from "process";

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
export const addCollectionAndDocuments = async (
  collectionKey: any,
  objectsToAdd: any
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object: any) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const categoriesMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase() as keyof typeof acc] = items;
    return acc;
  }, {} as any);
  return categoriesMap;
};

export const createUserDocumentFromAuth = async (
  user: UserCredential["user"],
  additonalInformation: any = {}
) => {
  if (!user) return;

  const userDocRef = doc(db, "users", user.uid);

  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
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

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (
  callback: NextOrObserver<UserCredential["user"]>
) => onAuthStateChanged(auth, callback);
