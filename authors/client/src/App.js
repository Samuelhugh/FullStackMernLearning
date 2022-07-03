import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import OneAuthor from "./components/OneAuthor";
import UpdateAuthor from "./components/UpdateAuthor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
          <Route element={<OneAuthor />} path="/home/authors/one/:id" />
          <Route element={<UpdateAuthor />} path="/home/authors/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
