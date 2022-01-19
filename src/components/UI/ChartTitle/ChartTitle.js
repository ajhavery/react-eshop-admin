import React from "react";
import classes from "./ChartTitle.module.css";

const ChartTitle = (props) => {
  return (
    <h3 className={`${classes.title} ${props.className}`}>
        {props.children}
    </h3>
  );
};

export default ChartTitle;
