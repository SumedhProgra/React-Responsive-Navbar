import React from "react";
import Navbar from "./navabr";
import { Routes, Route } from "react-router-dom";
import Contact from "./PAGES/contact";
import About from "./PAGES/about";
import Home from "./PAGES/home";
import Login from "./PAGES/login";
import Products from "./PAGES/products";
import Photos from "./PAGES/photos";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
