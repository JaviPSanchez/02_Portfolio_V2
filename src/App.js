import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Me from "./components/About/Me";
import Skills from "./components/About/Skills";

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
              {/* <Route path=":other" element={<Other />} /> */}
            </Route>
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
export default App;
