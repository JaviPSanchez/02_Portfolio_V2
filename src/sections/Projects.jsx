import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@utils/motion";
import styles from "@styles";
import { TypingText, TitleText, ExploreCard } from "@components";
import { ExploreProjects } from "@data";
// import { Button } from "@components";

const Projects = () => {
  const [active, setActive] = useState("project-2");
  return (
    <section
      className={`${styles.paddings} w-full mt-[20rem] flex flex-col justify-center`}
      id="work"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| My Work" />
        <TitleText
          title={
            <>
              Choose the project you want <br className="md:block hidden" /> to
              explore
            </>
          }
          customStyles="text-6xl text-white font-Rubik font-bold text-center mt-16"
        />
        <div className="mt-[50px] flex flex-row sm:flex-col h-[50vh] gap-5">
          {ExploreProjects.map((project, index) => (
            <ExploreCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
      {/* <div className="text-center mt-20">
        <Button text="See all projects" />
      </div> */}
    </section>
  );
};

export default Projects;
