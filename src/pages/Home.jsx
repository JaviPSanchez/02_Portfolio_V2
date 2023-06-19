import { motion } from "framer-motion";
import {
  Hero,
  Footer,
  About,
  Contact,
  LatestArticles,
  Projects,
  Expertise,
} from "@sections";
import styles from "@styles";
import { Navbar } from "@components";

const Home = () => {
  return (
    <motion.div
      className={`${styles.innerWidth} ${styles.flexCenter} ${styles.paddings} flex-col`}
    >
      <Navbar links={"home"} />
      <Hero />
      <About />
      <Projects />
      <div className="relative">
        <Expertise />
        <div className="gradient-03 z-0" />
      </div>
      <LatestArticles />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
