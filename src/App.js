import React, { useState } from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Index from "./Pages/Index";
import Service from "./Pages/Service";
import './App.css'
import CreatePost from "./Components/Posts/CreatePost";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path='/' element={<Index />}></Route>
        <Route path='/home' element={<Index />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path="/createPost" element={<CreatePost/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
