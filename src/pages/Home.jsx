import { motion } from "framer-motion";
import {
  Hero,
  Footer,
  About,
  Techstack,
  Contact,
  Blog,
  Projects,
} from "@sections";

export default function Home() {
  return (
    <motion.div
      className="w-full flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <Hero />
      <About />
      <Techstack />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </motion.div>
  );
}
