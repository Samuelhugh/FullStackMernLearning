// import ProductForm from "./components/ProductForm";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import OneProduct from "./components/OneProduct";
import Update from "./components/Update";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* This is INCORRECT. Each component in the Router needs its
          own unique path attribute. */}
          {/* <Route element={<PersonForm/>} path="/home" /> */}
          {/* <Route element={<PersonList/>} path="/home" /> */}
          <Route element={<Main />} path="/api" default />
          {/* The :id part of our path is a variable that we must give value to. */}
          <Route element={<OneProduct />} path="/api/product/:id" />
          <Route element={<Update />} path="/api/product/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
