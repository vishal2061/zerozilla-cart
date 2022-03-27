import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Product from "./components/product/Product";
import Category from "./components/category/Catoroy";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import ProductDetails from "./components/product-details/ProductDetails";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
