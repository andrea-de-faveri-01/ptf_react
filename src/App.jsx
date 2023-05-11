import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPost from "./pages/NewPost/NewPost";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />

        <Route path="/newpost" element={<NewPost setPosts={setPosts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
