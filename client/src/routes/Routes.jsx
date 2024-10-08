import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Home from "@/pages/Home";
import MyOrders from "@/pages/MyOrders";
import Products from "@/pages/Products";
import Layout from "@/components/Layout/Layout";
import Cart from "@/pages/Cart";
import Navbar from "@/components/Navbar";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
