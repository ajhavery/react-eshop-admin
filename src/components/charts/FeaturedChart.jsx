// import classes from "./FeaturedChart.module.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import ChartTitle from "../UI/ChartTitle/ChartTitle";

const FeaturedChart = (props) => {
  return (
    <div className={props.className}>
      <ChartTitle>{props.title}</ChartTitle>
      {/* height defined in terms of aspect ratio */}
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <LineChart
            data={props.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {props.grid && (
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="4 4" />
            )}
            <XAxis dataKey={props.dataKeyX} />
            <YAxis />
            <Tooltip />
            {props.legendAlign && <Legend verticalAlign={props.legendAlign} />}
            {props.dataKeySales && (
              <Line
                type="monotone"
                dataKey={props.dataKeySales}
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            )}
            {props.dataKeyRevenue && (
              <Line
                type="monotone"
                dataKey={props.dataKeyRevenue}
                stroke="#82ca9d"
              />
            )}
            {props.dataKeyCost && (
              <Line type="monotone" dataKey={props.dataKeyCost} stroke="red" />
            )}
          </LineChart>
        </ResponsiveContainer>
    </div>
  );
};

export default FeaturedChart;
