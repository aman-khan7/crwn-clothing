import { PropsWithChildren } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
} as const;

type ButtonTypeKey = keyof typeof BUTTON_TYPE_CLASSES;
type ButtonTypeValues = (typeof BUTTON_TYPE_CLASSES)[ButtonTypeKey];

const getButton = (buttonType: ButtonTypeValues = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({
  buttonType,
  ...otherProps
}: PropsWithChildren<
  { buttonType?: ButtonTypeValues } & React.HTMLAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>
>) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{otherProps.children}</CustomButton>;
};
export default Button;
