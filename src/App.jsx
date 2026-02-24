 import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/Home.jsx";
import Post from "./assets/Post.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;