import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@utils/motion";

export const TypingText = ({ title, customStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-3xl font-bold text-white font-Rubik text-center ${customStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, customStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${customStyles}`}
  >
    {title}
  </motion.h2>
);
