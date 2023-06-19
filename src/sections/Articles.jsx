import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExploreTags, TypingText, TitleText } from "@components";
import { ArticleCard } from "@components";
import { staggerContainer } from "@utils/motion";
import { ArticleData } from "@data";

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
      className="w-full h-5/6 mx-10 flex flex-col justify-center items-center"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title="| Articles" textStyles="text-center mt-20" />
      <TitleText
        textStyles="w-2/3 text-center"
        title={<>Enjoy some of my articles.</>}
      />

      <div className="w-full h-full my-40 flex flex-row bg-transparent">
        <motion.div layout className="w-full h-96 flex flex-wrap gap-6">
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
                "w-4/12 cursor-pointer hover:scale-95 transition-all"
              }
            />
          ))}
        </motion.div>
        <div className="flex flex-col justify-start items-left w-4/12 h-full ml-10 child:p-4">
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
