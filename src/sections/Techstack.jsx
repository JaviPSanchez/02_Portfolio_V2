import { motion } from "framer-motion";
import { FrontStack, BackStack, DataStack } from "@components";

const Techstack = () => {
  return (
    <motion.section
      className="h-full w-2/3 flex justify-center items-center my-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="grid grid-rows-3 grid-cols-3 gap-10 w-full h-full child:rounded-2xl drop-shadow-md my-40">
        <div className="row-start-1 row-end-2 col-start-1 col-end-2 bg-white dark:bg-dark2 overflow-hidden">
          <FrontStack />
        </div>
        <div className="row-start-1 row-end-2 col-start-2 col-end-4 px-10">
          <p class="font-Rubik text-12xl text-grey4 font-bold">01</p>
          <h3 class="font-Rubik font-bold w-full text-grey4 text-6xl mt-6">
            Software Development
          </h3>
          <p class="font-Rubik text-3xl text-white mt-10 text-justify">
            The foundation of any project lies in having the right data
            available at the right time and in the right place. To achieve this,
            I rely on REST APIs and databases, which are indispensable tools in
            my work. I also utilize serverless technologies, Docker, Node.js,
            FastAPI, and various other technologies to tackle projects
            effectively and efficiently.
          </p>
        </div>
        <div className="row-start-2 row-end-3 col-start-3 col-end-4 bg-white dark:bg-dark2 overflow-hidden">
          <BackStack />
        </div>
        <div className="row-start-2 row-end-3 col-start-1 col-end-3 px-10">
          <p class="font-Rubik text-12xl text-grey4 font-bold">02</p>
          <h3 class="font-Rubik font-bold w-full text-grey4 text-6xl mt-6">
            Data Development
          </h3>
          <p class="font-Rubik text-3xl text-white mt-10 text-justify">
            To extract, transform, and load information into dashboards, I
            utilize Python and JavaScript. This involves processing the data,
            modifying its structure as needed, and then loading it into the
            dashboards.
          </p>
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-2 bg-white dark:bg-dark2 overflow-hidden">
          <DataStack />
        </div>
        <div className="row-start-3 row-end-4 col-start-2 col-end-4 px-10">
          <p class="font-Rubik text-12xl text-grey4 font-bold">03</p>
          <h3 class="font-Rubik font-bold w-full text-grey4 text-6xl mt-6">
            Project Management
          </h3>
          <p class="font-Rubik text-3xl text-white mt-10 text-justify">
            In addition to managing and developing projects, it is crucial for
            success to lead and guide our teams effectively. Effective
            communication plays a pivotal role in achieving this. By fostering
            clear and efficient communication channels, we ensure that our team
            members are aligned, motivated, and empowered to perform their best.
            This ultimately contributes to the overall success of the projects
            we undertake.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Techstack;
