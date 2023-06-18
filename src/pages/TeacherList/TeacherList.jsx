import React, { useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { MdDelete, MdEdit } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { userData as initialData } from "../../data/teachers";
import css from "../StudentList/Student.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const TeacherList = () => {
  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name.firstName",
      header: "First Name",

      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            alt="avatar"
            height={35}
            src={row.original.name.img}
            loading="lazy"
            style={{ borderRadius: "50%" }}
          />
          <span>{renderedCellValue}</span>
        </Box>
      ),
    },
    {
      accessorKey: "gender",
      header: "Gender",
    },
    {
      accessorKey: "subject",
      header: "Subject",
    },
    {
      accessorKey: "mobileNumber",
      header: "Mobile Number",
    },
  ]);
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: "dark",
      },
      typography: {
        fontSize: "19",
      },
    })
  );

  const [userData, setData] = useState(initialData);

  return (
    <div className={css.container}>
      <ThemeProvider theme={theme}>
        <MaterialReactTable
          muiTableHeadCellProps={{
            sx: {
              fontWeight: "700",
              fontSize: "15px",
              border: "none!important",
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              fontWeight: "300",
              fontSize: "14px",
              border: "none!important",
            },
          }}
          columns={columns}
          data={userData}
          enableRowActions
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
              <Link to="student-view">
                <IconButton>
                  <AiFillEye size={20} />
                </IconButton>
              </Link>
              <IconButton
                color="secondary"
                onClick={() => {
                  table.setEditingRow(row);
                }}
              >
                <MdEdit size={20} />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => {
                  userData.splice(row.index, 1);
                  setData([...userData]);
                }}
              >
                <MdDelete size={20} />
              </IconButton>
            </Box>
          )}
        />
      </ThemeProvider>
    </div>
  );
};

export default TeacherList;
