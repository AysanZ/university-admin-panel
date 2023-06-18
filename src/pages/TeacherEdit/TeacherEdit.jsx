import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { DateField } from "@mui/x-date-pickers/DateField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";

import VisibilityOff from "@mui/icons-material/VisibilityOff";

import css from "../StudentAdd/StudentAdd.module.css";

const TeacherEdit = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    id: "PRE1234",
    firstName: "Vincent",
    lastName: "Green",
    gender: "",
    mobile: "077 3499 9959",
    dateOfBirth: "",
    joiningDate: "",
    qualification: "Bachelor of Engineering",
    experience: "5",
    username: "Vincent",
    emailId: "vincent20@gmail.com",
    password: "vincent20@gmail.com",
    repeatPassword: "vincent20@gmail.com",
    address: "3979 Ashwood Drive",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  function handleChange(event) {
    const { name, value, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitToApi(formData);
  }

  const theme = {
    width: "320px",
    "& .MuiInputBase-root": {
      color: "white",
    },

    "& .MuiInputLabel-root": { color: "var(--blue)" },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { borderColor: "#858585" },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "var(--blue)",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "var(--blue)",
      },
    },
  };

  const gender = [
    {
      value: "Female",
      label: "Female",
    },
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <form action="" method="POST" className={css.form}>
          <span className={css.header}>Basic Details</span>
          <div className={css.section}>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
                label="Teacher ID"
                placeholder="Enter ID"
                variant="outlined"
              />
            </div>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                label="First Name"
                placeholder="Enter First Name"
                variant="outlined"
              />
            </div>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                label="Last Name"
                placeholder="Enter Last Name"
                variant="outlined"
              />
            </div>
            <div className={css.textField}>
              <TextField
                sx={theme}
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                select
                required
                label="Gender"
              >
                {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateField"]}>
                <DateField
                  required
                  sx={theme}
                  name="dateOfBirth"
                  onChange={handleChange}
                  label="Date Of Birth"
                />
              </DemoContainer>
            </LocalizationProvider>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                label="Mobile"
                placeholder="Enter Mobile Number"
                variant="outlined"
              />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateField"]}>
                <DateField
                  required
                  sx={theme}
                  name="joiningDate"
                  onChange={handleChange}
                  label="Date Of Birth"
                />
              </DemoContainer>
            </LocalizationProvider>
            <div className={css.textField}>
              <TextField
                sx={theme}
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                label="Qualification"
              />
            </div>
            <div className={css.textField}>
              <TextField
                sx={theme}
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                label="Experience"
              />
            </div>
          </div>

          <span className={css.header}>Login details</span>
          <div className={css.section}>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                label="Username"
                placeholder="Enter Username"
                variant="outlined"
              />
            </div>

            <div className={css.textField}>
              <TextField
                sx={theme}
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                required
                label="Email ID"
              />
            </div>

            <FormControl sx={theme} variant="outlined" required>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: "var(--text)" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                label="Password"
              />
            </FormControl>

            <FormControl sx={theme} variant="outlined" required>
              <InputLabel htmlFor="outlined-adornment-password">
                Repeat Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: "var(--text)" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                label="Repeat Password"
              />
            </FormControl>
          </div>
          <span className={css.header}>Address</span>
          <div className={css.section}>
            <div className={`${css.textfield} ${css.address}`}>
              <TextField
                style={{ width: "100%" }}
                sx={theme}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                label="Address"
                placeholder="Enter Address"
                variant="outlined"
              />
            </div>
          </div>

          <div className={css.submit}>
            {selectedImage && (
              <div>
                <img
                  alt="not found"
                  width={"100px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
                <Button
                  onClick={() => setSelectedImage(null)}
                  sx={{
                    fontFamily: "Poppins",
                    marginTop: "20px",
                    backgroundColor: "var(--blue)",
                    "&:hover": {
                      backgroundColor: "var(--blue)",
                    },
                  }}
                  variant="contained"
                >
                  Remove
                </Button>
              </div>
            )}

            <input
              type="file"
              name="Image"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />

            <Button
              type="submit"
              sx={{
                fontFamily: "Poppins",
                backgroundColor: "var(--blue)",
                width: "150px",
                height: "40px",
                "&:hover": {
                  backgroundColor: "var(--blue)",
                },
              }}
              onChange={handleSubmit}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherEdit;
