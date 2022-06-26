import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import Navbar from "./Navbar";
// import DataAnalytics from "./pages/main/DataAnalytics";
// import DataEngineering from "./pages/main/DataEngineering";
// import DataDevelopment from "./pages/main/DataDevelopment";

export default function AnimatedRoutes() {
  const location = useLocation();
  console.log(location);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navbar />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
