import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
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
      <Sidebar>
        <Menu className="menu">
          <MenuItem
            className="item"
            icon={<MdSpaceDashboard size={25} />}
            component={<Link to="dashboard" />}
          >
            Dashboard
          </MenuItem>
          <SubMenu
            className="item"
            icon={<HiAcademicCap size={25} />}
            label="Students"
          >
            <MenuItem className="item" component={<Link to="student-list" />}>
              {" "}
              Student List{" "}
            </MenuItem>
            <MenuItem className="item" component={<Link to="student-view" />}>
              {" "}
              Student View{" "}
            </MenuItem>
            <MenuItem className="item" component={<Link to="student-add" />}>
              {" "}
              Student Add{" "}
            </MenuItem>
            <MenuItem className="item" component={<Link to="student-edit" />}>
              {" "}
              Student Edit{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu
            className="item"
            icon={<FaChalkboardTeacher size={25} />}
            label="Teachers"
          >
            <MenuItem className="item" component={<Link to="teacher-list" />}>
              {" "}
              Teacher List{" "}
            </MenuItem>
            <MenuItem className="item" component={<Link to="teacher-view" />}>
              {" "}
              Teacher View{" "}
            </MenuItem>
            <MenuItem className="item" component={<Link to="teacher-add" />}>
              {" "}
              Teacher Add{" "}
            </MenuItem>
            <MenuItem className="item" component={<Link to="teacher-edit" />}>
              {" "}
              Teacher Edit{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu
            className="item"
            icon={<FaBuilding size={25} />}
            label="Departments"
          >
            <MenuItem
              className="item"
              component={<Link to="department-list" />}
            >
              {" "}
              Department List{" "}
            </MenuItem>
            <MenuItem className="item" component={<Link to="department-add" />}>
              {" "}
              Department Add{" "}
            </MenuItem>
            <MenuItem
              className="item"
              component={<Link to="department-edit" />}
            >
              {" "}
              Department Edit{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu
            className="item"
            icon={<FaBookReader size={25} />}
            label="Subjects"
          >
            <MenuItem className="item" component={<Link to="subject-list" />}>
              {" "}
              Subject List{" "}
            </MenuItem>
            <MenuItem className="item" component={<Link to="subject-add" />}>
              {" "}
              Subject Add{" "}
            </MenuItem>
            <MenuItem className="item" component={<Link to="subject-edit" />}>
              {" "}
              Subject Edit{" "}
            </MenuItem>
          </SubMenu>
          <MenuItem
            className="item"
            icon={<BsFillCalendarEventFill size={25} />}
            component={<Link to="events" />}
          >
            {" "}
            Events
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Side;
