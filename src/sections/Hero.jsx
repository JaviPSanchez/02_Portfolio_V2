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

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex sm:flex-col flex-row items-center p-16 sm:p-0">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col justify-center items-start w-2/3 max-w-6xl absolute z-10"
      >
        <motion.h1
          variants={textVariant(1)}
          className={`sm:text-7xl sm:mt-12 text-12xl ${styles.customGradient} font-Rubik font-bold uppercase text-transparent`}
        >
          Digital Developer
        </motion.h1>

        <motion.div
          variants={boxVariants}
          initial="out"
          animate="in"
          className="flex flex-row w-2/3 mt-8"
        >
          <motion.div
            layout
            variants={iconVariants}
            className=" cursor-pointer hover:scale-110 transition-all"
          >
            <Link
              to="https://github.com/JaviPSanchez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-20"
            >
              <GitHub fillColor={"#FFFFFF"} />
            </Link>
          </motion.div>
          <motion.div
            variants={iconVariants}
            className="ml-6 cursor-pointer hover:scale-110 transition-all"
          >
            <Link
              to="https://www.linkedin.com/in/javierpalominosanchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-20"
            >
              <LinkedIn fillColor={"#FFFFFF"} />
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
              className="p-20"
            >
              <Twitter fillColor={"#FFFFFF"} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <PlanetCanvas />
      <div className="absolute xs:hidden bottom-48 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[30px] h-[64px] rounded-3xl border-2 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 40, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
