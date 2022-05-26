import React, { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  softShadows,
  shaderMaterial,
  OrbitControls,
  CameraShake,
} from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import Header from "./Header";

// soft Shadows
softShadows();

// const CustomShaderMaterial = shaderMaterial(
//   // Uniform
//   {
//     thickness: {
//       value: 1.5,
//     },
//   },
//   // Vertex Shader
//   glsl`
//     void main() {
//       gl_position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

//     }
//   `,
//   // Fragment Shader
//   glsl`
//   varying vec2 vUv;
//   uniform float thickness;

//   float edgeFactor(vec2 p){
//   vec2 grid = abs(fract(p - 0.5) - 0.5) / fwidth(p) / thickness;
//   return min(grid.x, grid.y);
//   }
//   void main() {
//   float a = edgeFactor(vUv);
//   vec3 c = mix(vec3(1), vec3(0), a);
//   gl_FragColor = vec4(c, 1.0);
// }
//   `
// );

// extend({ CustomShaderMaterial });

let cube = [];
for (let i = 0; i < 300; ++i) {
  const obj = {
    x: (Math.random() * (10.0 - -10) + -10).toFixed(2),
    y: 0,
    z: (Math.random() * (10.0 - -10) + -10).toFixed(2),
    rHeight: Math.random() * 6,
  };
  cube.push(obj);
}

const Buildings = () => {
  const mesh = useRef(null);
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return cube.map((item, index) => (
    <mesh castShadow key={index} position={[item.x, item.y, item.z]} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, item.rHeight, 1]} />
      <meshLambertMaterial
        attach="material"
        color="greylight"
        transparent="true"
        opacity={0.7}
      />
      {/* <CustomShaderMaterial /> */}
    </mesh>
  ));
};

export default function Landing() {
  return (
    <>
      <Header />
      <Canvas
        shadows
        colorManagement
        camera={{ position: [5, 5, 10], fov: 75, ncp: 0.1, fcp: 1000 }}
      >
        <fog attach="fog" args={["#ff6161", 0.002, 1000]} />
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
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
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
          pitchFrequency={0.1}
          rollFrequency={0.3}
        />
      </Canvas>
    </>
  );
}
