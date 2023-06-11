import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@utils/motion";
import { PlanetCanvas } from "@components";

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
          className="sm:text-7xl sm:mt-12 text-12xl bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] font-Rubik font-bold uppercase text-transparent"
        >
          Digital Developer
        </motion.h1>

        <div className="flex flex-row">
          <motion.div variants={slideIn} className="my-20">
            <a href="#about" className="border-first p-10 bg-white text-3xl">
              G
            </a>
          </motion.div>
          <motion.div className="mt-20 ml-10">
            <a
              href="#projects"
              className="border-second p-10 bg-white text-3xl"
            >
              G
            </a>
          </motion.div>
        </div>
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
