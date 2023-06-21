import { TypingText, TitleText } from "@components";
import { staggerContainer } from "@utils/motion";
import { motion } from "framer-motion";
import styles from "@styles";

const BackgroundText = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-2/3 absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 flex flex-col justify-center items-center"
    >
      <TypingText
        title="Hi, glad to see you here!"
        textStyles="font-Rubik text-3xl font-normal text-white text-center"
      />
      <TitleText
        customStyles={`${styles.customGradient} bg-clip-text mt-12 font-Rubik text-center font-bold uppercase text-transparent text-[64px]`}
        title={<>Things I do.</>}
      />
    </motion.div>
  );
};

export default BackgroundText;
