import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Importing CSS Classes
import classes from "./App.module.css";

// Importing Own COmponents
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Transactions from "./pages/transactions/Transactions";

// User Routes
import ViewUser from "./pages/userMgmt/viewUser/ViewUser";
import CreateUser from "./pages/userMgmt/createUser/CreateUser";
import UsersList from "./pages/userMgmt/usersList/UsersList";
import SellersList from "./pages/userMgmt/usersList/SellersList";
import AdminsList from "./pages/userMgmt/usersList/AdminsList";

// Product Routes
import ProductsList from "./pages/pdctMgmt/products/productsList/ProductsList";
import ViewProduct from "./pages/pdctMgmt/products/viewProduct/ViewProduct"
import CreateProduct from "./pages/pdctMgmt/products/createProduct/CreateProduct"

//Categories Routes
import CategoriesList from "./pages/pdctMgmt/categories/categoriesList/CategoriesList";
import ViewCategory from "./pages/pdctMgmt/categories/viewCategory/ViewCategory";
import CreateCategory from "./pages/pdctMgmt/categories/createCategory/CreateCategory";

function App() {
  return (
    <Fragment>
      <Topbar />
      <div className={classes["main-content"]}>
      <Sidebar />
      <Routes>

        {/* Summary Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        
        {/* User Routes */}
        <Route path="users" element={<UsersList />} />
        <Route path="users/sellers" element={<SellersList />} />
        <Route path="users/admins" element={<AdminsList />} />
        <Route path="users/:userId" element={<ViewUser />} />
        <Route path="users/createnew" element={<CreateUser />} />

        {/* Product Routes */}
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:productId" element={<ViewProduct />} />
        <Route path="products/createnew" element={<CreateProduct />} />

        {/* Categories Routes */}
        <Route path="categories" element={<CategoriesList />} />
        <Route path="categories/:categoryId" element={<ViewCategory />} />
        <Route path="categories/createnew" element={<CreateCategory />} />
      </Routes>
      </div>
    </Fragment>
  );
}

export default App;
