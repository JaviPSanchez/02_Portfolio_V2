import { FrontStack } from "@components";

const SoftwareDev = () => {
  return (
    <section className="h-full w-5/6 flex justify-center items-center m-60">
      <div className="flex w-full h-full">
        <div className="w-1/3 overflow-hidden rounded-lg">
          <FrontStack />
        </div>
        <div className="w-2/3 px-10">
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
      </div>
    </section>
  );
};

export default SoftwareDev;
