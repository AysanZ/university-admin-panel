import React, { useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { NavLink } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { userData as initialData } from "../../data/subjects";
import css from "../StudentList/Student.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SubjectList = () => {
  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "prerequisite",
      header: "Prerequisite",
    },
    {
      accessorKey: "credit",
      header: "Credit",
    },
  ]);
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: "dark",
      },
      typography: {
        fontSize: "16",
      },
    })
  );

  const [userData, setData] = useState(initialData);

  return (
    <div className={css.container}>
      <NavLink to="/subject-add">
        <button className={css.btn}>Add</button>
      </NavLink>

      <div>
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
                <NavLink to="/subject-edit">
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      table.setEditingRow(row);
                    }}
                  >
                    <MdEdit size={20} />
                  </IconButton>
                </NavLink>
              </Box>
            )}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default SubjectList;
