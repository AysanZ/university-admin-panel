import { useState } from "react";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { DateField } from "@mui/x-date-pickers/DateField";
import css from "../StudentAdd/StudentAdd.module.css";

const DepartmentAdd = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    headOfDepartment: "",
    startedYear: "",
    numberOfStudents: "",
  });

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
    axios.post('http://localhost:8081/api/department/add', formData)
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

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.form}>
          <span className={css.header}>Faculty Details</span>
          <div className={css.section}>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
                label="Department ID"
                variant="outlined"
              />
            </div>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                label="Department Name"
                variant="outlined"
              />
            </div>
            <div className={css.textField}>
              <TextField
                sx={theme}
                name="head"
                value={formData.headOfDepartment}
                onChange={handleChange}
                required
                label="Head of Department"
              />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateField"]}>
                <DateField
                  required
                  sx={theme}
                  name="startDate"
                  onChange={handleChange}
                  label="Department Start Date"
                />
              </DemoContainer>
            </LocalizationProvider>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="studentsNum"
                value={formData.numberOfStudents}
                onChange={handleChange}
                label="No Of Students"
                required
                variant="outlined"
              />
            </div>
            <div style={{ width: "320px" }}></div>
          </div>

          <div className={css.submit}>
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
              onClick={handleSubmit}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentAdd;
