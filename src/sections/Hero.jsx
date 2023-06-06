import { Planet } from "@components";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@utils/motion";

const Hero = () => {
  return (
    <section className="h-screen w-full grid grid-cols-2 items-center p-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col items-start w-2/3 max-w-6xl ml-40"
      >
        <motion.h1
          variants={textVariant(1)}
          className="bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] font-Rubik font-bold uppercase text-transparent text-12xl"
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

      <Canvas camera={{ position: [0, 0, 15] }} className="w-full h-full">
        <Planet />
      </Canvas>
    </section>
  );
};

export default Hero;
