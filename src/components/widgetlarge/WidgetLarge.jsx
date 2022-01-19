import React from "react";
import classes from "./WidgetLarge.module.css";
import ChartTitle from "../UI/ChartTitle/ChartTitle";
import { featuredTransacColumns, featuredTransactions } from "../../data/FeaturedTransactionsData";
import ShadowBox from "../UI/ShadowBox/ShadowBox";

const WidgetLarge = () => {
  return (
    <ShadowBox className={classes["widget-large"]}>
      <ChartTitle>Latest Transactions</ChartTitle>
      <table>
        <thead>
          <tr>
            {featuredTransacColumns.map((column) => (
              <th key={column.field}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featuredTransactions.map((item) => (
            <tr key={item.id}>
              <td className={classes.user}>
                <img src={item.image} alt={item.name} />
                <span className={classes.bold}>{item.name}</span>
              </td>
              <td className={classes.thin}>{item.date}</td>
              <td className={classes.thin}>{item.amount}</td>
              <td>
                {item.btnType === "Approved" && <button className={classes.Approved}>{item.btnType}</button>}
                {item.btnType === "Declined" && <button className={classes.Declined}>{item.btnType}</button>}
                {item.btnType === "Pending" && <button className={classes.Pending}>{item.btnType}</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ShadowBox>
  );
};

export default WidgetLarge;
