import {
  TextField as ReactAriaTextField,
  TextFieldProps as ReactAriaTextFieldProps,
  Input,
  Label,
  FieldError,
  Text,
  ValidationResult,
} from "react-aria-components";

import "./TextField.css";

export interface TextFieldProps extends ReactAriaTextFieldProps {
  /** Sets size of input field */
  size?: "medium" | "small";
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function TextField({
  size = "medium",
  label = "Label",
  description = "Description or helper text",
  errorMessage,
  ...props
}: TextFieldProps) {
  return (
    <ReactAriaTextField className="bcds-react-aria-TextField" {...props}>
      <Label className="bcds-react-aria-TextField--Label">{label}</Label>
      <Input className={`bcds-react-aria-TextField--Input ${size}`} />
      {description && (
        <Text
          slot="description"
          className={`bcds-react-aria-TextField--Description`}
        >
          {description}
        </Text>
      )}
      <FieldError className="bcds-react-aria-TextField--Error">
        {errorMessage}
      </FieldError>
    </ReactAriaTextField>
  );
}
