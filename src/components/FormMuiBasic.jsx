import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";

export const FormMuiBasic = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    courses: "",
    terms: false,
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

        <FormControl sx={{ width: 110 }}>
          <InputLabel id="menu">Courses</InputLabel>
          <Select
            labelId="menu"
            id="menuList"
            label="courses"
            value={inputValue.menu}
            onChange={handleChange}
          >
            <MenuItem value={"mongodb"}>Mongodb</MenuItem>
            <MenuItem value={"express"}>Express</MenuItem>
            <MenuItem value={"node"}>Node</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
          </Select>
        </FormControl>

        <FormGroup sx={{ margin: "20" }}>
          <FormControlLabel
            label="I Agree T&C"
            control={
              <CheckBox
                onChange={() =>
                  setInputValue((prevState) => ({
                    ...prevState,
                    terms: !inputValue.terms,
                  }))
                }
              />
            }
          ></FormControlLabel>
        </FormGroup>

        <Button className="submitBtn" variant="text" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
