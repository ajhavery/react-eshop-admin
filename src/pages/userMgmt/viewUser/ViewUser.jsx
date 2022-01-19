import React from "react";
import { Link } from "react-router-dom";

import classes from "./ViewUser.module.css";
import UserDetails from "./UserDetails";
import UserUpdateForm from "./UserUpdateForm";

const ViewUser = () => {
  return (
    <div className={classes.user}>
      <div className={classes["title-container"]}>
        <h2>Edit User</h2>
        <div>
        <Link to={"/users"}>
          <button className={classes['back-button']}>See All Users</button>
        </Link>
        <Link to={"/users/createnew"}>
          <button>Create</button>
        </Link>
        </div>
      </div>
      <div className={classes["user-details"]}>
        <UserDetails className={classes["user-top-left"]} />
        <UserUpdateForm className={classes["user-top-right"]} />
      </div>
    </div>
  );
};

export default ViewUser;
