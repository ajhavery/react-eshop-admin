import React from "react";
import classes from "./SellersList.module.css";
import UserList from "../../../components/lists/userList/UserList"

const SellersList = () => {
  return (
    <div className={classes.container}>
      <UserList />
    </div>
  );
};

export default SellersList;
