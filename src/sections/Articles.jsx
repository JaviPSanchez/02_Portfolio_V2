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

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = () => {
    const tags = ArticleData;
    setPopular(tags);
    setFiltered(tags);
  };

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

      <div className="w-11/12 h-full my-10 flex flex-row bg-transparent">
        <div className="flex flex-col items-start w-2/3 h-full child:p-4">
          <motion.div
            layout
            className="w-full h-fit grid grid-cols-fit grid-flow-row gap-8 overflow-scroll overflow-x-hidden scrollbar-hide"
          >
            {filtered.map((item, index) => {
              return <div key={index}>{item.element}</div>;
            })}
          </motion.div>
        </div>
        <div className="flex flex-col justify-start items-left w-1/3 h-full ml-10 child:p-4">
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
