import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
// import DataAnalytics from "./pages/main/DataAnalytics";
// import DataEngineering from "./pages/main/DataEngineering";
// import DataDevelopment from "./pages/main/DataDevelopment";

// https://www.youtube.com/watch?v=F5eDWtJRYaI
const routes = [
  { path: "/", name: "Home", element: <Home /> },
  { path: "/about", name: "Main", element: <About /> },
  {
    path: "/projects",
    name: "Projects",
    element: <Projects />,
    // children: [
    //   { path: "/da", element: <DataAnalytics /> },
    //   { path: "/de", element: <DataEngineering /> },
    //   { path: "/dd", element: <DataDevelopment /> },
    // ],
  },
  { path: "/blog", name: "Blog", element: <Blog /> },
];

export default function AnimatedRoutes() {
  const location = useLocation();
  console.log(location);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element }) => (
          <Route key="name" path={path} element={element}></Route>
        ))}
      </Routes>
    </AnimatePresence>
  );
}
