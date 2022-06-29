import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Academy from "./pages/Academy";
import Navbar from "./components/Navbar";
import Me from "./components/About/Me";
import Skills from "./components/About/Skills";
import Projects from "./components/About/Projects";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />}>
              <Route path="me" element={<Me />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
            </Route>
            <Route path="academy" element={<Academy />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
export default App;
