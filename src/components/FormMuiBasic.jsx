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
  Checkbox,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export const FormMuiBasic = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    courses: "",
    terms: false,
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
    setInputValue("");
    console.log(inputValue);
  };

  return (
    <div className="mainFormContainer">
      <h1 style={{ color: "blue" }}>FORM FOR MATERIAL UI</h1>
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
          varient="outlined"
          label="enter gender"
          type="gender"
          onChange={handleChange}
          name="gender"
        />

        <FormControl sx={{ width: 110 }}>
          <InputLabel id="menu">Courses</InputLabel>
          <Select
            value={inputValue.courses}
            labelId="menu"
            id="menuList"
            label="courses"
            onChange={handleChange}
            name="courses"
          >
            <MenuItem value={"mongodb"}>Mongodb</MenuItem>
            <MenuItem value={"express"}>Express</MenuItem>
            <MenuItem value={"node"}>Node</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
          </Select>
        </FormControl>

        <FormGroup className="CheackBox" sx={{ margin: "20" }}>
          <FormControlLabel
            label="I Agree T&C"
            control={
              <Checkbox
                onChange={() =>
                  setInputValue((prevState) => ({
                    ...prevState,
                    terms: !inputValue.terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />

        <Button className="submitBtn" variant="text" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
