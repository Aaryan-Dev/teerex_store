import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import List from "../Pages/List";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
