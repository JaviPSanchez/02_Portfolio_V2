import Planet from "../Planet/Planet";
import { Canvas } from "@react-three/fiber";
import { Button } from "../Button";

export const Header = () => {
  return (
    <section className="h-screen">
      <div className="h-full grid grid-cols-2 gap-6 items-center p-16">
        <div className="w-full z-5">
          <span className="bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] mt-12 font-Rubik text-center font-bold uppercase text-transparent text-8xl">
            Digital Developer
          </span>
          <p className="font-Rubik text-3xl text-black">
            Hi, I`m glad to see you here. My name is Javier, and I am a Digital
            Developer. I work with various technologies and programming
            languages, gaining more than 5 years of experience in digital
            projects that utilize state-of-the-art technologies. Currently, I
            hold the position of CTO in the automotive sector while also
            expanding my knowledge in Software Development.
          </p>
          <Button text="Projects" />
        </div>
        <Canvas className="w-full h-full">
          <Planet />
        </Canvas>
      </div>
    </section>
  );
};
