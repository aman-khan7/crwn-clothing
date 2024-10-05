import { AuthenticationContainer } from "./authentication.styles";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form /sign-in-form.components";

const Authentication = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </div>
  );
};

export default Authentication;
