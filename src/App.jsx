import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import Basket from "./Pages/Basket";
import Cards from "./components/Cards";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
     
        <BrowserRouter>
        <Navbar size={cart.length} />
      <div className="main container">
          <Routes>
            <Route index="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/cards"
              element={<Cards cart={cart} setCart={setCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/basket"
              element={<Basket cart={cart} setCart={setCart} />}
            />
          </Routes>
          </div>
        </BrowserRouter>
     
      <Footer />
    </div>
  );
}

export default App;
