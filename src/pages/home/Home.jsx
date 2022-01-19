import React from "react";
import FeaturedChart from "../../components/charts/FeaturedChart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import ShadowBox from "../../components/UI/ShadowBox/ShadowBox";
import WidgetLarge from "../../components/widgetlarge/WidgetLarge";
import WidgetSmall from "../../components/widgetsmall/WidgetSmall";
import { FeaturedChartData } from "../../data/FeaturedChartData";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <FeaturedInfo />
      <ShadowBox className={classes.box}>
        <FeaturedChart
          className={classes.chart}
          title="Sales Analytics"
          data={FeaturedChartData}
          grid
          dataKeyX="month"
          dataKeySales="sales"
          dataKeyRevenue="revenue"
          dataKeyCost="cost"
          legendAlign="top"
        />
      </ShadowBox>
      <div className={classes["home-widget"]}>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
