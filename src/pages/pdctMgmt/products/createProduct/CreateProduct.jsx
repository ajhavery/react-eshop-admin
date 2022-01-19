import React from "react";
import ChartTitle from "../../../../components/UI/ChartTitle/ChartTitle";
import classes from "./CreateProduct.module.css";
import { useNavigate } from "react-router-dom";
import { Publish } from "@mui/icons-material";

const CreateProduct = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes["head-container"]}>
        <ChartTitle>Add New Product</ChartTitle>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>

      <form className={classes["new-user-form"]} onSubmit={formSubmitHandler}>
        <div className={classes["new-user-item"]}>
          <label>Product Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className={classes["new-user-item"]}>
          <label>Stock</label>
          <input type="number" placeholder="123" />
        </div>
        <div className={classes["new-user-item"]}>
          <label>Is Active</label>
          <div className={classes["new-user-gender"]}>
            <input type="radio" name="active" id="yes" value="yes" />
            <label for="yes">Yes</label>
            <input type="radio" name="active" id="no" value="no" />
            <label for="no">No</label>
          </div>
        </div>

        <div className={classes["new-user-item"]}>
          <label>Category</label>
          <select name="category" id="category">
            <option value="user">Accessory</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
        </div>
        <div className={classes["new-user-item"]}>
        <label>Upload Product Image</label>
          <div className={classes["product-upload"]}>
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Apple Airpods"
            />
            <label for="file">
              <Publish />
            </label>
            <input type="file" id="file" />
          </div>
        </div>
        <button className={classes["new-user-btn"]}>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
