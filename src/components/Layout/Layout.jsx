import React from "react";
import moment from "moment/moment";
import Sidebar from "../Sidebar/Side";
import css from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom/dist";
import { BsFullscreen } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className={css.container}>
      <Sidebar className={css.sidebar} />

      {pathname === "/" && <Navigate to="/dashboard" />}

      <div className={css.dashboard}>
        <div className={css.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div className={css.right}>
            <div className={css.icons}>
              <div className={css.icon}>
                <BsChat size={20} />
              </div>
              <div className={css.icon}>
                <IoIosNotificationsOutline size={22} />
              </div>
              <div className={css.icon}>
                <BsFullscreen size={20} />
              </div>
            </div>
            <div className={css.profile}>
              <img src="./profile.jpg" alt="" />
              <div className={css.details}>
                <span>Denis Steven</span>
                <span>denissteven@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
