import TextField from "@mui/material/TextField";

function Input({ id, label, name, autoComplete, value, onChange }) {
  return (
    <TextField
      margin='normal'
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      autoFocus
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
