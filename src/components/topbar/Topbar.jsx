import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import classes from "./Topbar.module.css";

const Topbar = () => {
  return (
    <header>
      <span className={classes.logo}>ajadmin</span>
      <div className={classes["top-right"]}>
        <div className={classes["topbar-icons"]}>
          <NotificationsNone />
          <span className={classes.badge}>2</span>
        </div>
        <div className={classes["topbar-icons"]}>
          <Language />
          <span className={classes.badge}>2</span>
        </div>
        <div className={classes["topbar-icons"]}>
          <Settings />
        </div>
        <img
          src="https://i.pinimg.com/236x/7f/7c/35/7f7c35749870fd4be3eadb4e7c681c69.jpg"
          alt="profile"
        />
      </div>
    </header>
  );
};

export default Topbar;
