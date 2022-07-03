import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Academy from "./pages/Academy";
import Navbar from "./components/Navbar";
import Me from "./components/About/Me";
import WebDev from "./components/About/WebDev";
import Apps from "./components/About/Apps";
import Data from "./components/About/Data";
import Login from "./components/Academy/Login";
import SignUp from "./components/Academy/Signup";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />}>
              <Route path="me" element={<Me />} />
              <Route path="web" element={<WebDev />} />
              <Route path="apps" element={<Apps />} />
              <Route path="data" element={<Data />} />
            </Route>
            <Route path="/academy/*" element={<Academy />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
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
