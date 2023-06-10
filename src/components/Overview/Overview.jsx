import React from "react";
import Chart1 from "../Charts/Chart1";
import { BsFillCircleFill } from "react-icons/bs";
import css from "./Overview.module.css";
import Chart2 from "../Charts/Chart2";

const Overview = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.header}>
          <span className={css.title}>Overview</span>
          <div>
            <BsFillCircleFill size={10} style={{ color: "#6F6AF8" }} />
            <span>Teacher</span>
            <BsFillCircleFill size={10} style={{ color: "#1C1C1C" }} />
            <span>Student</span>
          </div>
        </div>
        <Chart1 />
      </div>
      <div className={css.container}>
        <div className={css.header}>
          <span className={css.title}>Overview</span>
          <div>
            <BsFillCircleFill size={10} style={{ color: "#6F6AF8" }} />
            <span>Teacher</span>
            <BsFillCircleFill size={10} style={{ color: "#1C1C1C" }} />
            <span>Student</span>
          </div>
        </div>
        <Chart2 />
      </div>
    </div>
  );
};

export default Overview;
