import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@utils/motion";
import styles from "@styles";
import { TypingText } from "@components";

const About = () => {
  return (
    <section
      className={`${styles.paddings} relative z-10 sm:w-full w-2/3 max-w-6xl mt-[20rem]`}
      id="about"
    >
      <div className="gradient-02 z-0 right-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Me" textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="font-Rubik sm:text-2xl sm:mx-2 text-4xl text-grey4 my-16 text-center"
        >
          Hi, I`m glad to see you here. My name is Javier, and I am a{" "}
          <span className="font-extrabold text-white">Digital Developer</span>.
          I work with various technologies and programming languages, gaining
          more than{" "}
          <span className="font-extrabold text-white">
            5 years of experience
          </span>{" "}
          in digital projects that utilize state-of-the-art technologies.
          Currently, I hold the position of{" "}
          <span className="font-extrabold text-white">CTO</span> in the
          automotive sector while also expanding my knowledge in Software
          Development.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
