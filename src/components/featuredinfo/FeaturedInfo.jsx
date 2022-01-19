import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Card } from "@mui/material";
import React from "react";
import ChartTitle from "../UI/ChartTitle/ChartTitle";
import classes from "./FeaturedInfo.module.css";

const FeaturedInfo = () => {
  return (
    <div className={classes.featured}>
      <Card className={classes["featured-item"]}>
        <ChartTitle>Revenue</ChartTitle>
        <div className={classes["featured-money-container"]}>
          <h4>$2,415</h4>
          <p>
            -11.4 <ArrowDownward className={`${classes['featured-icon']} ${classes.negative}`} />
          </p>
        </div>
        <span className={classes["featured-sub"]}>Compared to last month</span>
      </Card>

      <Card className={classes["featured-item"]}>
      <ChartTitle>Sales</ChartTitle>
        <div className={classes["featured-money-container"]}>
          <h4>$4,415</h4>
          <p>
            -1.4 <ArrowDownward className={`${classes['featured-icon']} ${classes.negative}`} />
          </p>
        </div>
        <span className={classes["featured-sub"]}>Compared to last month</span>
      </Card>

      <Card className={classes["featured-item"]}>
      <ChartTitle>Cost</ChartTitle>
        <div className={classes["featured-money-container"]}>
          <h4>$2,215</h4>
          <p>
            +21.4 <ArrowUpward className={`${classes['featured-icon']}`} />
          </p>
        </div>
        <span className={classes["featured-sub"]}>Compared to last month</span>
      </Card>
    </div>
  );
};

export default FeaturedInfo;
