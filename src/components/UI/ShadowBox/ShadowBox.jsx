import React from "react";
import classes from "./ShadowBox.module.css";

const ShadowBox = (props) => {
  return (
    <div className={`${classes.shadowbox} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default ShadowBox;
