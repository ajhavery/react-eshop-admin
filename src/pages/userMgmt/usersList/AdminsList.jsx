import React from "react";
import UserList from "../../../components/lists/userList/UserList"
import classes from "./AdminsList.module.css";

const AdminsList = () => {
  return (
    <div className={classes.container}>
      <UserList />
    </div>
  );
};

export default AdminsList;
