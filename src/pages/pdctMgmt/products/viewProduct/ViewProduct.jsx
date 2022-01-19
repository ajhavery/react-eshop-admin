import React from "react";
import { Link } from "react-router-dom";
import classes from "./ViewProduct.module.css";

import FeaturedChart from "../../../../components/charts/FeaturedChart";
import { productChartData } from "../../../../data/ProductChartData";
import ShadowBox from "../../../../components/UI/ShadowBox/ShadowBox";
import { Publish } from "@mui/icons-material";

const ViewProduct = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.container}>
      <div className={classes["title-container"]}>
        <h2>Edit User</h2>
        <div>
          <Link to={"/products"}>
            <button className={classes["back-button"]}>See All Products</button>
          </Link>
          <Link to={"/products/createnew"}>
            <button>Create</button>
          </Link>
        </div>
      </div>
      <div className={classes["product-top"]}>
        <ShadowBox className={classes["product-top-left"]}>
          <FeaturedChart
            className={classes["product-top-left"]}
            title="Product Sales"
            data={productChartData}
            grid
            dataKeyX="month"
            dataKeySales="Sales"
          />
        </ShadowBox>
        <ShadowBox className={classes["product-top-right"]}>
          <div className={classes["product-right-info-top"]}>
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Apple Airpods"
            />
            <span className={classes["product-name"]}>Apple Airpods</span>
          </div>
          <div className={classes["product-right-info-bottom"]}>
            <div className={classes["product-right-info-item"]}>
              <span className={classes["product-info-key"]}>id:</span>
              <span className={classes["product-info-value"]}>123</span>
            </div>

            <div className={classes["product-right-info-item"]}>
              <span className={classes["product-info-key"]}>sales:</span>
              <span className={classes["product-info-value"]}>5123</span>
            </div>

            <div className={classes["product-right-info-item"]}>
              <span className={classes["product-info-key"]}>active:</span>
              <span className={classes["product-info-value"]}>yes</span>
            </div>

            <div className={classes["product-right-info-item"]}>
              <span className={classes["product-info-key"]}>in stock:</span>
              <span className={classes["product-info-value"]}>no</span>
            </div>
          </div>
        </ShadowBox>
      </div>
      <ShadowBox className={classes["product-bottom"]}>
        <form className={classes["products-form"]} onSubmit={formSubmitHandler}>
          <div className={classes["products-form-left"]}>
            <label htmlFor="name">Product Name</label>
            <input type="text" id="name" placeholder="Apple Airpods" />

            <label htmlFor="instock">In Stock</label>
            <select name="instock" id="instock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="accessory">Accessory</option>
              <option value="phone">Phone</option>
            </select>
          </div>
          <div className={classes["product-form-right"]}>
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
            <button>Update</button>
          </div>
        </form>
      </ShadowBox>
    </div>
  );
};

export default ViewProduct;
