import React from 'react'
import classes from './UserDetails.module.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@mui/icons-material";
import ShadowBox from "../../../components/UI/ShadowBox/ShadowBox"

const UserDetails = (props) => {
    return (
        <ShadowBox className={props.className}>
          <div className={classes["user-show-top"]}>
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={classes["user-show-image"]}
            />
            <div className={classes["user-show-top-title"]}>
              <span className={classes["user-show-username"]}>Anna Becker</span>
              <span className={classes["user-show-jobtitle"]}>
                Software Engineer
              </span>
            </div>
          </div>
          <div className={classes["user-show-bottom"]}>
            <span className={classes["user-account-title"]}>Account Details</span>
            <div className={classes["user-info-row"]}>
              <PermIdentity className={classes["user-info-icon"]} />
              <span className={classes["user-info-data"]}>
                annabeck99
              </span>
            </div>
            <div className={classes["user-info-row"]}>
              <CalendarToday className={classes["user-info-icon"]} />
              <span className={classes["user-info-data"]}>
                10.12.1999
              </span>
            </div>
            <span className={classes["user-account-title"]}>Contact Details</span>
            <div className={classes["user-info-row"]}>
              <PhoneAndroid className={classes["user-info-icon"]} />
              <span className={classes["user-info-data"]}>
                +1 123 456 78
              </span>
            </div>
            <div className={classes["user-info-row"]}>
              <MailOutline className={classes["user-info-icon"]} />
              <span className={classes["user-info-data"]}>
                annabeck99@gmail.com
              </span>
            </div>
            <div className={classes["user-info-row"]}>
              <LocationSearching className={classes["user-info-icon"]} />
              <span className={classes["user-info-data"]}>
                New York | USA
              </span>
            </div>
          </div>
        </ShadowBox>
    )
}

export default UserDetails
