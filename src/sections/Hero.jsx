import { useContext } from "react";
import { motion } from "framer-motion";
import {
  iconVariants,
  boxVariants,
  staggerContainer,
  textVariant,
} from "@utils/motion";
import { PlanetCanvas } from "@components";
import { GitHub, LinkedIn, Twitter } from "@svg";
import { Link } from "react-router-dom";
import styles from "@styles";
import { ThemeContext } from "@context";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="relative h-screen w-full flex sm:flex-col flex-row items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col justify-center items-start sm:w-full w-2/3 max-w-6xl absolute z-10"
      >
        <motion.h1
          variants={textVariant(0.4)}
          className={`${styles.customGradient} ${styles.xPaddings} sm:text-8xl sm:mt-12 text-12xl bg-clip-text font-Rubik font-bold uppercase text-transparent`}
        >
          Digital Developer
        </motion.h1>

        <motion.div
          variants={boxVariants}
          initial="out"
          whileInView="show"
          animate="in"
          className={`${styles.xPaddings} flex flex-row w-fit mt-8`}
        >
          <motion.div
            layout
            initial="hidden"
            whileInView="show"
            variants={iconVariants}
            className="cursor-pointer"
          >
            <Link
              to="https://github.com/JaviPSanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full overflow-hidden">
                <GitHub
                  fillColor={theme === "dark" ? "#FFFFFF" : "#000000"}
                  textStyles="hover:scale-110 transition-all"
                  width={55}
                  height={55}
                />
              </div>
            </Link>
          </motion.div>
          <motion.div variants={iconVariants} className="ml-6 cursor-pointer">
            <Link
              to="https://www.linkedin.com/in/javierpalominosanchez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full overflow-hidden">
                <LinkedIn
                  fillColor={theme === "dark" ? "#FFFFFF" : "#000000"}
                  customStyles="hover:scale-110 transition-all"
                  width={60}
                  height={60}
                />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={iconVariants}
            className="ml-6 cursor-pointer hover:scale-110 transition-all"
          >
            <Link
              to="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <Twitter
                fillColor={"#FFFFFF"}
                textStyles="hover:scale-110 transition-all"
                width={50}
                height={50}
              /> */}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <PlanetCanvas />
    </section>
  );
};

export default Hero;
