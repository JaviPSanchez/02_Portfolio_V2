import { motion } from "framer-motion";
import styles from "@styles";
import { staggerContainer } from "@utils/motion";
import { ArticleData } from "@data";
import { TypingText, TitleText } from "@components";
import { ArticleCard } from "@components";
import { fadeIn } from "@utils/motion";

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
        className={`${styles.paddingX} flex flex-row gap-7 cursor-pointer pb-14 `}
      >
        {ArticleData.slice(0, 4).map((data, index) => (
          <ArticleCard
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            key={data.name}
            index={index}
            {...data}
            customStyles={"w-full"}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default LatestArticles;
