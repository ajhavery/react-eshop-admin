import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./ProductList.module.css";
import { allProductsList } from "../../../data/AllProductsList"

import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

function ProductList() {
  const [pageSize, setPageSize] = useState(8);
  // Handling delete button click
  const [data, setData] = useState(allProductsList);

  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "product",
      headerName: "Product",
      flex: 3,
      renderCell: (params) => {
        return (
          <div className={classes["product-container"]}>
            <img src={params.row.img} alt={params.row.name} />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "price", headerName: "Price", flex: 1.5 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 2,
      description: "Edit or Delete the Product",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row.id}>
              <button className={classes["product-edit-btn"]}>Edit</button>
            </Link>
            <DeleteOutline
              className={classes["product-del-btn"]}
              onClick={deleteHandler.bind(null, params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Fragment>
      <div className={classes["product-list-title"]}>
        <h2>View, Edit and Create Products</h2>
        <Link to={"/products/createnew"}>
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

export default ProductList;
