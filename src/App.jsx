import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
