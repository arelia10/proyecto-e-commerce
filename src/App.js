// import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CartContent from "./components/CartContent/CartContent";
import { DataProvider } from "./components/context/Datacontext";

function App() {
  return (
    <DataProvider>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/cart" element={<CartContent />}></Route> */}
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
