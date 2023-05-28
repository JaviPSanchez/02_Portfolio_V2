import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tags from "./Tags";
import { BlogPosts } from "../../assets/data/data";

// console.log(BlogPosts);

export default function Blog() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTopic, setActiveTopic] = useState("All");
  // console.log(filtered.map((item) => item.element));

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
      className="w-2/3 h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="w-11/12 h-full my-10 flex flex-row bg-transparent">
        <div className="flex flex-col items-start w-2/3 h-full child:p-4">
          <h1 className="font-Rubik font-bold text-6xl text-black">Posts</h1>
          <motion.div
            layout
            className="w-full h-fit grid grid-cols-fit grid-flow-row gap-8 overflow-scroll overflow-x-hidden scrollbar-hide"
          >
            {
              <AnimatePresence>
                {filtered.map((item) => {
                  return <div key={item.id}>{item.element}</div>;
                })}
              </AnimatePresence>
            }
          </motion.div>
        </div>
        <div className="flex flex-col justify-start items-left w-1/3 h-full ml-10 child:p-4">
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-Rubik font-bold text-6xl text-black mt-6">
              Explore tags
            </h1>

            <Tags
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
