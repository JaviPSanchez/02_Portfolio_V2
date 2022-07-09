import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "../components/Blog/BlogCard";
import ExploreTags from "../components/Blog/ExploreTags";
import { blogCards, dataTopics } from "../components/Blog/BlogData";

export default function Blog() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTopic, setActiveTopic] = useState(0);

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = () => {
    const tags = dataTopics;
    setPopular(tags);
    setFiltered(tags);
  };

  return (
    <motion.div
      className="h-5/6 mx-10 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="w-11/12 h-full my-10 flex flex-row bg-transparent">
        <div className="flex flex-col items-start w-2/3 h-full child:p-4">
          <h1 className="font-Rubik text-6xl text-white">Blog's:</h1>
          <div className="w-full h-full grid grid-cols-fit gap-8 overflow-scroll overflow-x-hidden scrollbar-hide">
            {blogCards.map((item) => {
              return <BlogCard id={item.id} title={item.title} />;
            })}
          </div>
        </div>
        <div className="flex flex-col justify-start items-left w-1/3 h-full ml-10 child:p-4">
          <div className="flex flex-col items-start h-1/3">
            <h1 className="font-Rubik text-6xl text-white mb-10">Last post</h1>
            <div className="bg-grey1 dark:bg-dark2 h-1/3 w-full rounded-xl">
              Post
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-Rubik text-6xl text-white mt-6">
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
}
