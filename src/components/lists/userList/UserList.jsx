import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./UserList.module.css";
import { allUsersList } from "../../../data/AllUsersList";

import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

function UserList() {
  const [pageSize, setPageSize] = useState(8);
  // Handling delete button click
  const [data, setData] = useState(allUsersList);

  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // Setting Column headers
  // Note that column field should match rows key
  // column width canbe set using - width and minWidth in px
  // responsive width - use flex instead of width
  // params.row == Unique key to refer to the data passed to the row elements
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "user",
      headerName: "User",
      flex: 2.5,
      renderCell: (params) => {
        return (
          <div className={classes["user-container"]}>
            <img src={params.row.avatar} alt={params.row.username} />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "status", headerName: "Status", flex: 1.5 },
    { field: "transaction", headerName: "Transaction Volume", flex: 1.5 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 2,
      description: "Edit or Delete the User",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <button className={classes["user-edit-btn"]}>Edit</button>
            </Link>
            <DeleteOutline
              className={classes["user-del-btn"]}
              onClick={deleteHandler.bind(null, params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Fragment>
      <div className={classes["user-list-title"]}>
        <h2>View, Edit and Create Users</h2>
        <Link to={"/users/createnew"}>
          <button>Create</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[8, 10, 20]}
        pagination
        checkboxSelection
        disableSelectionOnClick
      />
    </Fragment>
  );
}

export default UserList;
