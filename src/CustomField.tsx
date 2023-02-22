import { TextField } from "@mui/material";
import { Field } from "react-final-form";
import { formatPrice } from "./utils/formatPrice";

interface CustomFieldProps {
  name: string;
  label: string;
}

export function CustomField(props: CustomFieldProps) {
  return <Field
    name={props.name}
    format={formatPrice}
    render={({ input, meta }) => (
      <TextField
        {...input}
        fullWidth
        required
        variant="standard"
        id={props.name}
        label={props.label}
        margin='normal'
        error={meta.error && meta.touched}
        helperText={meta.error && meta.touched ? <span>{meta.error}</span> : ''}
      />
    )}
  />
}