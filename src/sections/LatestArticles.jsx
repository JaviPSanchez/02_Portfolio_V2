import { motion } from "framer-motion";
import styles from "@styles";
import { staggerContainer } from "@utils/motion";
import { ArticleData } from "@data";
import { TypingText, TitleText } from "@components";
import { ArticleCard } from "@components";

console.log(ArticleData);

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
        <TypingText title="| Latest Articles" textStyles="text-center" />
        <TitleText title={<>Let me show some of my newest articles</>} />
      </div>
      <div
        className={`pb-14 ${styles.paddingX} flex flex-row gap-7 cursor-pointer `}
      >
        {ArticleData.map((data, index) => (
          <ArticleCard key={data.name} index={index} {...data} />
        ))}
      </div>
    </motion.section>
  );
};

export default LatestArticles;
