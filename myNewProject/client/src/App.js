import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./components/Detail";
import Update from "./components/Update";
// import PersonForm from "./components/PersonForm";
// import PersonList from "./components/PersonList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* adding the default makes this the default path */}
          <Route element={<Main />} path="/api/people" default />
          {/* The :id part of our path is a variable that we must give value to. */}
          <Route element={<Detail />} path="/api/people/:id" />
          {/* Update Route */}
          <Route element={<Update />} path="/api/people/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
