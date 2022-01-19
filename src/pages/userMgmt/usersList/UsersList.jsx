import React from 'react'
import classes from './UsersList.module.css'
import UserList from "../../../components/lists/userList/UserList"

const UsersList = () => {
    return (
        <div className={classes.container}>
           <UserList />
        </div>
    )
}

export default UsersList
