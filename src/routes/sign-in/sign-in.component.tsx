// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoolePopup,
  createUserDocumentFromAuth,
  // signInWithGooleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";

const SignIn = () => {
  // useEffect(() => {
  //   const doSomething = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response);
  //     }
  //   };
  //   doSomething();
  // }, []);

  const logGoogleUser = async () => {
    const user = await signInWithGoolePopup();
    console.log({ user });
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGooleRedirect}>
        Sign In With Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
