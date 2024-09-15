import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import "./form-input.styles.scss";

const FormInput = (props: {
  label: string;
  inputOptions: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  const { label, inputOptions } = props;
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {label && (
        <label
          className={`${
            String(inputOptions?.value)?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
