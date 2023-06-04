import { motion } from "framer-motion";
import {
  Navbar,
  Hero,
  Footer,
  About,
  SoftwareDev,
  DataDev,
  DigitalDev,
  Contact,
  LatestArticles,
  Projects,
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
        <SoftwareDev />
        <div className="gradient-03 z-0" />
        <DataDev />
      </div>
      <div className="relative">
        <DigitalDev />
        <div className="gradient-04 z-0" />
        <LatestArticles />
      </div>
      <Contact />
      <Footer />
    </motion.div>
  );
}
