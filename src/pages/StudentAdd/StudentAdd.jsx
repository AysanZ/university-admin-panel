import Box from "@mui/material/Box";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { DateField } from "@mui/x-date-pickers/DateField";
import css from "./StudentAdd.module.css";

const StudentAdd = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    roll: "",
    bloodGroup: "",
    religion: "",
    email: "",
    discipline: "",
    semester: "",
    admissionId: "",
    phone: "",
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

  const bloodGroup = [
    {
      value: "A",
      label: "A+",
    },
    {
      value: "B",
      label: "B+",
    },
    {
      value: "O",
      label: "O+",
    },
  ];

  const religion = [
    {
      value: "Hindu",
      label: "Hindue",
    },
    {
      value: "Christian",
      label: "Christian",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  const discipline = [
    {
      value: "Computer Engineering",
      label: "Computer Engineering",
    },
    {
      value: "Computer Science",
      label: "Computer Science",
    },
  ];

  const semester = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
  ];

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <span>Student Information</span>
        <form action="" method="POST" className={css.form}>
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
              name="roll"
              value={formData.roll}
              onChange={handleChange}
              label="Roll"
              placeholder="Enter Roll Number"
              variant="outlined"
            />
          </div>

          <div className={css.textField}>
            <TextField
              sx={theme}
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              select
              required
              label="Blood Group"
            >
              {bloodGroup.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className={css.textField}>
            <TextField
              sx={theme}
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              select
              required
              label="Religion"
            >
              {religion.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className={css.textfield}>
            <TextField
              sx={theme}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              label="Email"
              placeholder="Enter Email Address"
              variant="outlined"
            />
          </div>

          <div className={css.textField}>
            <TextField
              sx={theme}
              name="discipline"
              value={formData.discipline}
              onChange={handleChange}
              select
              required
              label="Discipline"
            >
              {discipline.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className={css.textField}>
            <TextField
              sx={theme}
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              select
              required
              label="Semester"
            >
              {semester.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className={css.textfield}>
            <TextField
              sx={theme}
              name="admissionId"
              value={formData.admissionId}
              onChange={handleChange}
              type="text"
              label="Admission ID"
              placeholder="Enter Admission ID"
              variant="outlined"
            />
          </div>

          <div className={css.textfield}>
            <TextField
              sx={theme}
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              label="Phone"
              placeholder="Enter Phone Number"
              variant="outlined"
            />
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

export default StudentAdd;
