import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Welcome, Home, Blog } from "@pages";

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
