import { useState } from "react";
import FormInput from "../form-input/form-input.components";
import {
  signInWithGoolePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.components";
import "./sign-in-form.styles.scss";
import { OperationType } from "firebase/auth";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithgoogle = async () => {
    await signInWithGoolePopup();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const userCredentials = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(userCredentials);

      resetFormFields();
    } catch (error) {}
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>sign In with Your Email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="password"
          inputOptions={{
            type: "password",

            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" onClick={signInWithgoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
