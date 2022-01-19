import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Storefront,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes["sidebar-wrapper"]}>
        <div className={classes["sidebar-menu"]}>
          <h3>Dashboard</h3>
          <nav>
            <ul>
              <li Link>
                <LineStyle className={classes["sidebar-icons"]} />
                <Link to="/">Home</Link>
              </li>
              <li>
                <AttachMoney className={classes["sidebar-icons"]} />
                <Link to="/transactions">Transactions</Link>
              </li>
              <li>
                <TrendingUp className={classes["sidebar-icons"]} />
                Sales
              </li>
            </ul>
          </nav>
        </div>

        <div className={classes["sidebar-menu"]}>
          <h3>User Management</h3>
          <nav>
            <ul>
              <li>
                <PermIdentity className={classes["sidebar-icons"]} />
                <Link to="users">Users</Link>
              </li>
              <li>
                <PermIdentity className={classes["sidebar-icons"]} />
                <Link to="users/sellers">Sellers</Link>
              </li>

              <li>
                <BarChart className={classes["sidebar-icons"]} />
                <Link to="users/admins">Admins</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={classes["sidebar-menu"]}>
          <h3>Products Management</h3>
          <nav>
            <ul>
              <li>
                <Storefront className={classes["sidebar-icons"]} />
                <Link to="products">Products</Link>
              </li>
              <li>
                <Timeline className={classes["sidebar-icons"]} />
                <Link to="categories">Categories</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={classes["sidebar-menu"]}>
          <h3>Notifications</h3>
          <nav>
            <ul>
              <li>
                <MailOutline className={classes["sidebar-icons"]} />
                Mail
              </li>
              <li>
                <DynamicFeed className={classes["sidebar-icons"]} />
                Feedback
              </li>
              <li>
                <ChatBubbleOutline className={classes["sidebar-icons"]} />
                Messages
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
