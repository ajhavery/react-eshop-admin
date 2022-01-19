import { Visibility } from "@mui/icons-material";
import React from "react";
import { featuredUserData } from "../../data/FeaturedUserData";
import ChartTitle from "../UI/ChartTitle/ChartTitle";
import ShadowBox from "../UI/ShadowBox/ShadowBox";
import classes from "./WidgetSmall.module.css";

const WidgetSmall = () => {
  
  const listItems = featuredUserData.map((user) => (
    <li key={user.id}>
      <img src={user.image} alt="user" />
      <div className={classes["widget-small-user"]}>
        <span className={classes["user-name"]}>{user.name}</span>
        <span className={classes["job-title"]}>{user.jobTitle}</span>
      </div>
      <button className={classes["widget-small-button"]}>
        <Visibility className={classes["widget-small-icon"]} />
        Display
      </button>
    </li>
  ));

  return (
    <ShadowBox className={classes["widget-small"]}>
      <ChartTitle>New Join Members</ChartTitle>
      <ul>{listItems}</ul>
    </ShadowBox>
  );
};

export default WidgetSmall;
