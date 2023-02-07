import React, {  useState } from "react";
import { useTheme } from "@mui/material";
import MyTextField from "./textfield";

const AdvancedFilter = ({
  searchValue,

  handleChangeValue,
  onClick,
  ...other
}) => {
  const [name, setName] = useState("");

  const [error, setError] = useState("");

  const onChange5 = (e) => {
    const newValue = e.target.value;

    if (!newValue.match(/[٠-٩\\0-9\\a-z%<>\\A-Z%<>\\$'"\[\]]/)) {
      setError("");
      handleChangeValue(e);
      console.log("slaw");
    } else {
      setError("تکایە ناوەکە بە پیتی عەرەبی بنووسە");
      console.log("ssssssssssslaw");
    }
    setName(newValue);
  };
  const [name1, setName1] = useState("");
  const [error1, setError1] = useState("");
  const onChange1 = (e) => {
    const newValue1 = e.target.value;

    if (!newValue1.match(/[٠-٩\\0-9\\a-z%<>\\$'"\[\]]/)) {
      setError1("");
      handleChangeValue(e);
    } else {
      setError1("تکایە ناوەکە بە پیتی عەرەبی بنووسە");
    }
    setName1(newValue1);
  };
  const [name2, setName2] = useState("");
  const [error2, setError2] = useState("");
  const onChange2 = (e) => {
    const newValue2 = e.target.value;

    if (!newValue2.match(/[٠-٩\\0-9\\a-z%<>\\$'"\[\]]/)) {
      setError2("");
      handleChangeValue(e);
    } else {
      setError2("تکایە ناوەکە بە پیتی عەرەبی بنووسە");
    }
    setName2(newValue2);
  };
  const [name3, setName3] = useState("");
  const [error3, setError3] = useState("");
  const onChange3 = (e) => {
    const newValue3 = e.target.value;

    if (!newValue3.match(/[٠-٩\\0-9\\a-z%<>\\$'"\[\]]/)) {
      setError3("");
      handleChangeValue(e);
    } else {
      setError3("تکایە ناوەکە بە پیتی عەرەبی بنووسە");
    }
    setName3(newValue3);
  };

  const theme = useTheme();
  

  return (
    <>
      
        <MyTextField
          type="text"
          name="Fullname"
          value={searchValue.Fullname}
          onChange={onChange5}
          helperText={error}
          error={!!error}
          label=" ناوی سیانیت لێرە بنووسە"
          multiline
          maxRows={2}
          sx={{
            width: "45%",
            margin: theme.spacing(1.2),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),

            "@media (max-width: 780px)": {
              width: "100%"
            }
          }}
          {...other}
        />
        <MyTextField
          type="text"
          name="Shurename"
          value={searchValue.Shurename}
          onChange={onChange1}
          helperText={error1}
          error={!!error1}
          label="نازناو ( لقب )"
          sx={{
            width: "20%",
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),

            "@media (max-width: 780px)": {
              width: "100%"
            }
          }}
          {...other}
        />
        <MyTextField
          type="text"
          name="Mothername"
          value={searchValue.Mothername}
          onChange={onChange2}
          helperText={error2}
          error={!!error2}
          label="ناوی دایک "
          sx={{
            width: "30%",
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            "@media (max-width: 780px)": {
              width: "100%"
            }
          }}
          {...other}
        />

        
     
    </>
  );
};

export default AdvancedFilter;
