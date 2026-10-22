import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Shows from "./pages/Shows";
import Music from "./pages/Music";
import Press from "./pages/Press";
import EPK from "./pages/EPK";
import styles_global from "./styles/App.module.css";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/music" element={<Music />} />
        <Route path="/press" element={<Press />} />
        <Route path="epk" element={<EPK />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className={styles_global.app_container}>
      <BrowserRouter >
        <Header></Header>
        <AnimatedRoutes></AnimatedRoutes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
