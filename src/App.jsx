import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cursor from "./components/common/cursor/Cursor";
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Cursor></Cursor>
      <Navbar></Navbar>
      <Routes>
        <Route exect path="/" Component={Home} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
