import { motion } from "framer-motion";
import {
  Navbar,
  Hero,
  Footer,
  About,
  Contact,
  LatestArticles,
  Projects,
  Expertise,
} from "@sections";
import styles from "@styles";

export default function Home() {
  return (
    <motion.div
      className={`${styles.innerWidth} ${styles.flexCenter} ${styles.paddings} flex-col`}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <div className="relative">
        <Expertise />
        <div className="gradient-03 z-0" />
      </div>
      <div className="relative">
        <div className="gradient-04 z-0" />
        <LatestArticles />
      </div>
      <Contact />
      <Footer />
    </motion.div>
  );
}
