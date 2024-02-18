import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export const FormMuiBasic = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <TextField
          value={inputValue.name}
          varient="outlined"
          label="enter you name"
          type="text"
          onChange={handleChange}
          name="name"
        />

        <TextField
          value={inputValue.email}
          varient="outlined"
          label="enter you email"
          type="email"
          onChange={handleChange}
          name="email"
        />

        <TextField
          value={inputValue.password}
          varient="outlined"
          label="enter  pasword"
          type="password"
          onChange={handleChange}
          name="password"
        />

        <TextField
          value={inputValue.gender}
          variant="outlined"
          label="enter you gender"
          type="gender"
          onChange={handleChange}
          name="gender"
        />
        <Button className="submitBtn" variant="text" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
