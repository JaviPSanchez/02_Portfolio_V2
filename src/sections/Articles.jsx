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
        customStyles={`${styles.customGradient} text-6xl font-Rubik font-bold text-start sm:text-center mt-16`}
      />

      <div className="w-full flex flex-row sm:flex-col my-40 sm:my-10">
        <motion.div
          layout
          className="w-5/6 sm:w-full flex flex-wrap justify-center items-center gap-12 sm:order-last"
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
                "w-1/4 sm:w-5/6 sm:flex sm:justify-center sm:items-center  cursor-pointer hover:scale-95 transition-all"
              }
            />
          ))}
        </motion.div>
        <div className="flex flex-col sm:flex-wrap justify-start sm:justify-center items-left sm:items-center w-1/6 sm:w-full sm:p-6 h-full">
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
