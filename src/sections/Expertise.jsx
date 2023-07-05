import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "@utils/motion";
import styles from "@styles";
import { TypingText, TitleText, StartSteps } from "@components";
import { StartingFeatures } from "@data";
import { TechStack } from "@components";

const Expertise = () => (
  <section className={`${styles.paddings} relative z-10 mt-[20rem]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row sm:flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <TechStack />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText
          title="😊 What Do I do?"
          customStyles={`text-center dark:text-[#FFFFFF]`}
        />
        <TitleText
          title={
            <>
              Transforming the digital landscape through innovation and
              efficiency across key areas of expertise.
            </>
          }
          customStyles={`${styles.customGradient} text-6xl font-Rubik font-bold text-start mt-16`}
        />
        <div className="mt-12 flex flex-col gap-8">
          {StartingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Expertise;
