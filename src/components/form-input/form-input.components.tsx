import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = (props: {
  label: string;
  inputOptions: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  const { label, inputOptions } = props;
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel shrink={!!String(inputOptions?.value)?.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
