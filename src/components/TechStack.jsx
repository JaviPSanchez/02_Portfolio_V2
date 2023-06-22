import { Badges } from "@data";
import { Area } from "@components";

const TechStack = () => {
  return (
    <div className="gradient-card h-5/6 w-5/6 rounded-3xl flex flex-col just justify-start items-center hover:scale-105 duration-300">
      <div className="w-full">
        <h1 className="font-Rubik font-bold text-6xl p-6 text-white">
          Tech-Stack
        </h1>
      </div>
      <div className="py-2 px-6 w-full h-1/3 flex flex-wrap justify-start items-center child:m-2">
        {Badges.map((items) => {
          return (
            <div
              key={items.id}
              className="bg-white p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center hover:scale-125 duration-300"
            >
              {items.image}
            </div>
          );
        })}
      </div>
      <div className="relative w-full h-full py-4 overflow-hidden rounded-3xl">
        <div className="absolute w-full h-full scale-105">
          <Area gradientColor={["#9787FF", "#5555FF"]} />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
