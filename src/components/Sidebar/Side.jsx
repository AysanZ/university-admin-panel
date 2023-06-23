import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { FaChalkboardTeacher, FaBookReader, FaBuilding } from "react-icons/fa";
import "./Sidebar.css";

const Side = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src="./Logo.png" alt="" />
      </div>
      <Sidebar className="side">
        <Menu className="menu">
          <MenuItem
            className="item"
            icon={<MdSpaceDashboard size={25} />}
            component={<Link to="/dashboard" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            className="item"
            icon={<HiAcademicCap size={25} />}
            component={<Link to="/students" />}
          >
            Student
          </MenuItem>

          <MenuItem
            className="item"
            icon={<FaChalkboardTeacher size={25} />}
            component={<Link to="/teachers" />}
          >
            Teacher
          </MenuItem>

          <MenuItem
            className="item"
            icon={<FaBuilding size={25} />}
            component={<Link to="/faculties" />}
          >
            Faculty
          </MenuItem>

          <MenuItem
            className="item"
            icon={<FaBookReader size={25} />}
            component={<Link to="/subjects" />}
          >
            Subject
          </MenuItem>

          <MenuItem
            className="item"
            icon={<BsFillCalendarEventFill size={25} />}
            component={<Link to="/calendar" />}
          >
            {" "}
            Calendar
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Side;
