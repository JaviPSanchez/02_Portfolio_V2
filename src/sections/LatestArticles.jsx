import { motion } from "framer-motion";
import styles from "@styles";
import { staggerContainer } from "@utils/motion";
import { ArticleData } from "@data";
import { TypingText, TitleText } from "@components";
import { ArticleCard } from "@components";
import { fadeIn } from "@utils/motion";

const LatestArticles = () => {
  return (
    <motion.section
      className="mt-[20rem] bg-black-100 rounded-xl"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
    >
      <div
        className={`rounded-2xl ${styles.padding} min-h-[150px] text-center`}
      >
        <TypingText
          title="🙌 Latest Articles"
          customStyles={`text-center dark:text-[#FFFFFF]`}
        />
        <TitleText
          title={<>Let me show some of my newest articles</>}
          customStyles={`${styles.customGradient} text-6xl font-Rubik font-bold text-center mt-16`}
        />
      </div>
      <div
        className={`${styles.paddingX} flex flex-row sm:flex-col sm:justify-center sm:items-center gap-8 cursor-pointer sm:mt-12`}
      >
        {ArticleData.slice(0, 3).map((item, index) => (
          <ArticleCard
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            key={index}
            index={item.id}
            {...item}
            customStyles={
              "w-full sm:w-5/6 cursor-pointer hover:drop-shadow-customLight dark:hover:drop-shadow-customDark transition-all"
            }
          />
        ))}
      </div>
    </motion.section>
  );
};

export default LatestArticles;
