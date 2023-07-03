import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@utils/motion";
import styles from "@styles";
import { TypingText } from "@components";

const About = () => {
  return (
    <section
      className={`${styles.paddings} ${styles.flexCenter} ${styles.yMargings} z-10 sm:w-full w-full max-w-6xl`}
      id="about"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText
          title="| About Me"
          customStyles={`${styles.customGradient} text-center dark:text-[#FFFFFF]`}
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="font-Rubik sm:text-2xl sm:mx-2 text-4xl text-black dark:text-grey4 my-16 text-center"
        >
          Hi, I`m glad to see you here. My name is Javier, and I am a{" "}
          <span className={`${styles.customGradient} font-extrabold`}>
            Digital Developer
          </span>
          . I work with various technologies and programming languages, gaining
          more than{" "}
          <span className={`${styles.customGradient} font-extrabold`}>
            5 years of experience
          </span>{" "}
          in digital projects that utilize state-of-the-art technologies.
          Currently, I hold the position of{" "}
          <span className={`${styles.customGradient} font-extrabold`}>CTO</span>{" "}
          in the automotive sector while also expanding my knowledge in Software
          Development.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
