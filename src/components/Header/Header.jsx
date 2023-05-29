import Planet from "../Planet/Planet";
import { Canvas } from "@react-three/fiber";
import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="h-screen w-full grid grid-cols-2 items-center p-16 bg-black">
      <div className="w-2/3 max-w-6xl ml-40 ">
        <span className="bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] mt-12 font-Rubik text-center font-bold uppercase text-transparent text-12xl">
          Digital Developer
        </span>
        <p className="font-Rubik text-4xl text-white mt-12">
          Hi, I`m glad to see you here. My name is Javier, and I am a Digital
          Developer. I work with various technologies and programming languages,
          gaining more than 5 years of experience in digital projects that
          utilize state-of-the-art technologies. Currently, I hold the position
          of CTO in the automotive sector while also expanding my knowledge in
          Software Development.
        </p>
        <Button text="Projects" />
      </div>
      <Canvas className="w-full h-full">
        <Planet />
      </Canvas>
    </div>
  );
};
