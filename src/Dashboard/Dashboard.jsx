import React from "react";
import Overview from "../components/Overview/Overview";
import StudentsNum from "../components/StudentsNum/StudentsNum";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.statistics}>
        <div className={css.static}>
          <div>
            <span>Students</span>
            <span>5002</span>
          </div>
          <img src="./dash-icon-01.svg" alt="student" />
        </div>
        <div className={css.static}>
          <div>
            <span>Awards</span>
            <span>50+</span>
          </div>
          <img src="./dash-icon-02.svg" alt="student" />
        </div>
        <div className={css.static}>
          <div>
            <span>Department</span>
            <span>30+</span>
          </div>
          <img src="./dash-icon-03.svg" alt="student" />
        </div>
        <div className={css.static}>
          <div>
            <span>Revenue</span>
            <span>$505</span>
          </div>
          <img src="./dash-icon-04.svg" alt="student" />
        </div>
      </div>

      <div className={css.overview}>
        <Overview />
      </div>
    </div>
  );
};

export default Dashboard;
