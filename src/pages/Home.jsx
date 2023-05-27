import { motion } from "framer-motion";
import Contact from "../components/Contact/Contact";
import Projects from "../components/SectionProjects/Projects";
import { Footer } from "../components/Footer/Footer";
import { About } from "../components/About/About";
import { Header } from "../components/Header/Header";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
}
