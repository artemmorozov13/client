import cn from "classnames";
import { TextField } from "@mui/material";

import s from "./input.module.scss";

interface InputProps {
  label: string;
  onChange: Function;
  className?: string;
  readOnly?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { label, className, onChange, readOnly = false } = props;

  return (
    <TextField
      variant="outlined"
      label={label}
      onChange={(e) => onChange(e)}
      className={cn(s.input, className)}
      disabled={readOnly}
    />
  );
};

export default Input;
