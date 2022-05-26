import React from "react";
import { Canvas } from "@react-three/fiber";
import Header from "./Header";

export default function Landing() {
  return (
    <>
      <Header />
      <Canvas>
        <mesh>
          <planeBufferGeometry args={[3, 5]} />
        </mesh>
      </Canvas>
    </>
  );
}
