import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { softShadows, OrbitControls, CameraShake } from "@react-three/drei";
import HomeHeader from "../components/HomeHeader";
import { motion } from "framer-motion";
// soft Shadows
softShadows();

let cube = [];
for (let i = 0; i < 800; ++i) {
  const obj = {
    x: (Math.random() * (10.0 - -50) + -20).toFixed(2),
    y: 0,
    z: (Math.random() * (10.0 - -30) + -20).toFixed(2),
    rHeight: Math.random() * 3,
  };
  cube.push(obj);
}

const Buildings = () => {
  const mesh = useRef(null);
  return cube.map((item, index) => (
    <mesh castShadow key={index} position={[item.x, item.y, item.z]} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, item.rHeight, 1]} />
      <meshLambertMaterial
        attach="material"
        color="#ededed"
        transparent="true"
        opacity={0.7}
      />
    </mesh>
  ));
};

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <HomeHeader />
      <Canvas
        shadows
        colorManagement
        camera={{ position: [5, 5, 10], fov: 75, ncp: 0.1, fcp: 1000 }}
      >
        {/* <fog attach="fog" args={["#ebebeb", 0.5, 100]} /> */}
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[10, 10, 100]} intensity={0.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[-2, -2, -2]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.1} />
          </mesh>
        </group>
        <Buildings />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <CameraShake
          yawFrequency={0.1}
          pitchFrequency={0.3}
          rollFrequency={0.1}
        />
      </Canvas>
    </motion.div>
  );
}
