import { PropsWithChildren } from "react";
import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
type ButtonTypeKey = keyof typeof BUTTON_TYPE_CLASSES;

const Button = ({
  buttonType,
  ...otherProps
}: PropsWithChildren<
  { buttonType?: ButtonTypeKey } & React.HTMLAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>
>) => {
  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ""
      }`}
      {...otherProps}
    >
      {otherProps.children}
    </button>
  );
};
export default Button;
