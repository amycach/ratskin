import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Shows from "./pages/Shows";
import Music from "./pages/Music";
import Press from "./pages/Press";
import MeetTheRats from "./pages/Meet-The-Rats";
import Fun from "./pages/Fun"
import styles_global from "./styles/App.module.css";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/music" element={<Music />} />
          <Route path="/press" element={<Press />} />
          <Route path="/meet-the-rats" element={<MeetTheRats />} />
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
    </BrowserRouter>
    </div>
  );
}

export default App;
