import React from "react";
import classes from "./UserUpdateForm.module.css";
import ShadowBox from "../../../components/UI/ShadowBox/ShadowBox"
import ChartTitle from "../../../components/UI/ChartTitle/ChartTitle";
import Publish from "@mui/icons-material/Publish";

const UserUpdateForm = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <ShadowBox className={props.className}>
      <ChartTitle>Edit User Details</ChartTitle>
      <form
        className={classes["user-update-form"]}
        onSubmit={formSubmitHandler}
      >
        <div className={classes["left-section"]}>
          <div className={classes["input-field"]}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="annabeck99" />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Anna Becker" />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="annabeck99@gmail.com" />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="+1 123 456 78" />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="New York | USA" />
          </div>
        </div>
        <div className={classes["right-section"]}>
          <div className={classes["user-image-upload"]}>
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="file">
              <Publish className={classes["user-update-icon"]} />
            </label>
            <input type="file" id="file" />
          </div>
          <button className={classes["user-update-btn"]}>Update</button>
        </div>
      </form>
    </ShadowBox>
  );
};

export default UserUpdateForm;
