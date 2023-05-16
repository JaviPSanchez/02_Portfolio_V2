import { motion } from "framer-motion";
import Contact from "../components/Contact/Contact";
import Projects from "../components/SectionProjects/Projects";
import { Footer } from "../components/Footer/Footer";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <header className="w-full h-[450px] bg-blue-400">Header</header>
      <section className="w-full h-[450px] bg-blue-200">About</section>
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
}
