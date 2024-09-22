// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import "./authentication.styles.scss";
import {
  auth,
  signInWithGoolePopup,
  createUserDocumentFromAuth,
  // signInWithGooleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form /sign-in-form.components";

const Authentication = () => {
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
    const userDocRef = await createUserDocumentFromAuth(user.user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
      {/* </div> */}
      {/* <button onClick={signInWithGooleRedirect}>
        Sign In With Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
