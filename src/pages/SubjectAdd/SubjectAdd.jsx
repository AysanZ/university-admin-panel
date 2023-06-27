import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import css from "../StudentAdd/StudentAdd.module.css";

const SubjectAdd = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    prerequisites: "",
    credit: "",
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
    axios.post('http://localhost:8080/api/subject/add', formData)
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
        <form action="" method="POST" className={css.form}>
          <span className={css.header}>Subject Details</span>
          <div className={css.section}>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
                label="Subject ID"
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
                label="Subject Name"
                variant="outlined"
              />
            </div>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="prerequisite"
                value={formData.prerequisites}
                onChange={handleChange}
                required
                label="Prerequisite"
                variant="outlined"
              />
            </div>
            <div className={css.textfield}>
              <TextField
                sx={theme}
                type="text"
                name="credit"
                value={formData.credit}
                onChange={handleChange}
                required
                label="Credit"
                variant="outlined"
              />
            </div>
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
        </form>
      </div>
    </div>
  );
};

export default SubjectAdd;
