<FormControl>
  <FormLabel>Gender</FormLabel>
  <RadioGroup name="gender" defaultValue={"male"} onChange={handleChange}>
    <FormControlLabel value={"male"} label="Male" control={<Radio />} />
    <FormControlLabel value={"Female"} label="Female" control={<Radio />} />
    <FormControlLabel value={"other"} label="other" control={<Radio />} />
  </RadioGroup>
</FormControl>;
