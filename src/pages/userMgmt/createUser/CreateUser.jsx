import React from "react";
import ChartTitle from "../../../components/UI/ChartTitle/ChartTitle"
// import ShadowBox from "../../components/UI/ShadowBox/ShadowBox";
import classes from "./CreateUser.module.css";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes["head-container"]}>
        <ChartTitle>Add New User</ChartTitle>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>

      <form className={classes["new-user-form"]} onSubmit={formSubmitHandler}>
        <div className={classes["new-user-item"]}>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className={classes["new-user-item"]}>
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className={classes["new-user-item"]}>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className={classes["new-user-item"]}>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className={classes["new-user-item"]}>
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className={classes["new-user-item"]}>
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className={classes["new-user-item"]}>
          <label>Gender</label>
          <div className={classes["new-user-gender"]}>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>

        <div className={classes["new-user-item"]}>
          <label>Role</label>
          <select name="role" id="role">
            <option value="user">User</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button className={classes["new-user-btn"]}>Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
