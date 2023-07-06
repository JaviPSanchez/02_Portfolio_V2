import { useContext } from "react";
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
import { ThemeContext } from "@context";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      className={`${styles.innerWidth} ${styles.flexCenter} ${styles.paddings} flex-col`}
    >
      <div className="relative">
        <div
          className={
            theme === "dark"
              ? "gradient-02 -z-10 right-0"
              : "gradient-08 z-0 right-0"
          }
        />
      </div>
      <Navbar links="home" />
      <Hero />
      <div className="relative">
        <About />
        <div
          className={
            theme === "dark"
              ? "gradient-02 -z-10 right-0"
              : "gradient-08 -z-10 right-0"
          }
        />
      </div>
      <Projects />
      <div className="relative">
        <Expertise />
        <div
          className={
            theme === "dark" ? "gradient-02 -z-10" : "gradient-08 -z-10"
          }
        />
      </div>
      <LatestArticles />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
