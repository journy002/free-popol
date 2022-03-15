import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Commu from "./components/communication/commu";
import ShowMyDog from "./components/showMyDog/showMyDog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/showMyDog" element={<ShowMyDog />} />
        <Route path="/commu" element={<Commu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
