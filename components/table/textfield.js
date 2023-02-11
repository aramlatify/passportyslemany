import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { inputClasses } from "@mui/material/Input";


const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontSize: 24,
    Color: "white"
  },
  "& label.Mui-focused": {
    color: "white"
  },
  "& .MuiInput-underline": {
    "&:before": {
      borderBottom: "2px solid green !important"
    },
    "&:after": {
      borderBottom: "2px solid white !important"
    },
    [`&:hover:not(${inputClasses.disabled}):not(${inputClasses.focused}):not(${inputClasses.error}):before`]: {
      borderBottom: "2px solid white !important"
    }
  },
  input: {
    "&::selection": {
      backgroundColor: "lightgreen",
      color: "blue"
    }
  },
  "& label": {
    color: "white" ,
    left: "0.75rem",
    
    transformOrigin: "right",
    fontSize: "1 rem",
  },
  "& legend": {
  
    color: "white" ,
    textAlign: "right",
    
  },
  
});

export default function CustomizedInputs(props) {
  return (
    
      <CssTextField
        label="Custom CSS"
        id="custom-css-outlined-input"
        variant="standard"
        {...props}
      />
  
  );
}
