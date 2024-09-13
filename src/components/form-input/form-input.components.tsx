import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";

const FormInput = (
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) => {
  const { label, ...otherProps } = props;
  return (
    <div>
      <label> {label}</label>
      <input {...otherProps} />
    </div>
  );
};
export default FormInput;
