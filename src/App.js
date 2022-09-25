import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Me from "./components/About/Me";
import WebDev from "./components/About/WebDev";
import Data from "./components/About/Data";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="me" element={<Me />} />
              <Route path="web" element={<WebDev />} />
              <Route path="data" element={<Data />} />
            </Route>
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
export default App;
