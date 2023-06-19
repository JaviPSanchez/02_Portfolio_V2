import { motion } from "framer-motion";
import { Navbar } from "@components";
import styles from "@styles";
import { TypingText, TitleText } from "@components";
import { ArticleData } from "@data";

const Article = ({ index, title }) => {
  return (
    <motion.div
      className={`${styles.innerWidth} ${styles.flexCenter} ${styles.paddings} flex-col`}
    >
      <Navbar links={"article"} />
      <TypingText title="| Article index" textStyles="text-center mt-20" />
      <TitleText textStyles="w-2/3 text-center" title={<>title</>} />
      <div>
        <span>Body</span>
      </div>
    </motion.div>
  );
};

export default Article;
