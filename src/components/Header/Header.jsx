import Planet from "../Planet/Planet";
import { Canvas } from "@react-three/fiber";
import { Button } from "../Button";
import { hero_background } from "../../assets/images";

export const Header = () => {
  return (
    <div className="h-screen w-full grid grid-cols-2 items-center p-16">
      <div className="flex flex-col items-start w-2/3 max-w-6xl ml-40 relative">
        <span className="bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] font-Rubik font-bold uppercase text-transparent text-12xl">
          Digital Developer
        </span>
        {/* <div className="rounded-2xl overflow-hidden">
          <img
            src={hero_background}
            className="absolute top-0 left-10 h-[480px] w-[1200px] object-cover"
          />
        </div> */}
        <div className="flex flex-row">
          <div className="my-20 ">
            <span className="border-first p-10 bg-white text-3xl ">G</span>
          </div>
          <div className="mt-20 ml-10">
            <span className="border-second p-10 bg-white text-3xl ">G</span>
          </div>
        </div>
        {/* <Button text="Projects" /> */}
      </div>
      <Canvas camera={{ position: [0, 0, 5.2] }} className="w-full h-full">
        <Planet />
      </Canvas>
    </div>
  );
};
