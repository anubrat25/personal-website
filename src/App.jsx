import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Mainpage from "./mainpage.jsx";
import About from "./about.jsx";
import Blogs from "./blogs.jsx";
import Paticularblog from "./components/paticularblog.jsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/blogs/:title" element={<Paticularblog />} />
      </Routes>
    </div>
  );
}

export default App;
