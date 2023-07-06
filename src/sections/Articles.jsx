import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExploreTags, TypingText, TitleText } from "@components";
import { ArticleCard } from "@components";
import { staggerContainer } from "@utils/motion";
import { ArticleData } from "@data";
import styles from "@styles";

const Articles = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTopic, setActiveTopic] = useState("All");

  const fetchAndSetData = () => {
    setPopular(ArticleData);
    setFiltered(ArticleData);
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);

  return (
    <motion.div
      className="w-full mx-10 flex flex-col justify-center items-center"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText
        title="🧪 Articles"
        customStyles={`text-center dark:text-[#FFFFFF] mt-20`}
      />
      <TitleText
        title={<>Enjoy some of my articles.</>}
        customStyles={`${styles.customGradient} text-6xl font-Rubik font-bold text-start mt-16`}
      />

      <div className="w-full flex flex-row my-40">
        <motion.div
          layout
          className="w-5/6 flex flex-wrap justify-start gap-12"
        >
          {filtered.map((item) => (
            <ArticleCard
              key={item.id}
              index={item.id}
              title={item.title}
              subtitle={item.subtitle}
              time={item.time}
              image={item.image}
              topic={item.topic}
              date={item.date}
              customStyles={
                "w-1/4 cursor-pointer hover:scale-95 transition-all"
              }
            />
          ))}
        </motion.div>
        <div className="flex flex-col justify-start items-left w-1/6 h-full">
          <div className="flex flex-col justify-center items-start">
            <ExploreTags
              popular={popular}
              setFiltered={setFiltered}
              activeTopic={activeTopic}
              setActiveTopic={setActiveTopic}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Articles;
