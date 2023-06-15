import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExploreTags } from "@components";
import { BlogPosts } from "@data";

const Articles = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTopic, setActiveTopic] = useState("All");

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = () => {
    const tags = BlogPosts;
    setPopular(tags);
    setFiltered(tags);
  };

  return (
    <motion.div
      className="w-full h-5/6 mx-10 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="w-11/12 h-full my-10 flex flex-row bg-transparent">
        <div className="flex flex-col items-start w-2/3 h-full child:p-4">
          <h1 className="font-Rubik text-6xl text-black dark:text-white">
            Posts
          </h1>
          <motion.div
            layout
            className="w-full h-fit grid grid-cols-fit grid-flow-row gap-8 overflow-scroll overflow-x-hidden scrollbar-hide"
          >
            <AnimatePresence>
              {filtered.map((item, index) => {
                return <div key={index}>{item.element}</div>;
              })}
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="flex flex-col justify-start items-left w-1/3 h-full ml-10 child:p-4">
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-Rubik text-6xl text-black dark:text-white mt-6">
              Explore tags
            </h1>

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
