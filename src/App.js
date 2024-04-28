import React, { useState } from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Index from "./Components/Home/Index";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";


function App() {
  const [user, setUser] = useState({
    name: "Nouha",
    lastname: "nouha",
    email: "nouhatrifi@gmail.com",
    password: "ok1234",
    image: "https://res.cloudinary.com/dgs5ufh6i/image/upload/v1705176712/Assets/Madam_Butterfly_h9psxk.webp",
    notifications: ["Nouha liked your post", "Nouha followed you", "Nouha is your best friend now!", "Nouha liked your post", "Nouha followed you", "Nouha is your best friend now!"]
  })
  return (
    <Routes>
      <Route path="/" element={<Home User={user} />}>
        <Route path='/' element={<Index />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Service />}></Route>
      </Route>

    </Routes>
  );
}

export default App;
