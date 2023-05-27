import Planet from "../Planet/Planet";
import { Canvas } from "@react-three/fiber";
export const Header = () => {
  return (
    <section className="h-5/6">
      <div className="grid grid-cols-2 gap-24 items-center h-full max-w-screen-xl mx-auto px-8 py-8">
        <div className="w-full z-5">
          <h1 className="text-6xl">
            <span className="highlight-header">Digital Developer</span>
          </h1>
          <p className="hero-description">
            Hi, I`m glad to see you here. My name is Javier, and I am a Digital
            Developer. I work with various technologies and programming
            languages, gaining more than 5 years of experience in digital
            projects that utilize state-of-the-art technologies. Currently, I
            hold the position of CTO in the automotive sector while also
            expanding my knowledge in Software Development.
          </p>
          {/* <a
            target="_blank"
            href="https://www.linkedin.com/in/javierpalominosanchez/"
            className="btn btn--white margin-right-sm"
          >
            Donwload CV
          </a>
          <a href="#projects" className="btn btn--outline btn--scroll-to-5">
            View projects &darr;
          </a> */}
        </div>
        <Canvas className="w-full h-full">
          <Planet />
        </Canvas>
      </div>
    </section>
  );
};
