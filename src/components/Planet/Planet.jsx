import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import EarthDayMap from "../../assets/images/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/images/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/images/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/images/8k_earth_clouds.jpg";
import EarthTest from "../../assets/images/test.png";
import { TextureLoader } from "three";
import * as THREE from "three";

const atmosphereVertexShader = `
varying vec3 vertexNormal;

void main() {
  vertexNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.65);
}`;

const atmosphereFragmentShader = `
varying vec3 vertexNormal;
void main() {
  float intensity = pow(0.9 - dot(vertexNormal, vec3(0, 0, 1)), 2.0);
  gl_FragColor = vec4(0.3, 0.6, 1.0, 0.9) * intensity;
}`;

export default function Planet() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const cloudsRef = useRef();
  const earthRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 20;
  });

  return (
    <>
      <directionalLight
        color={0xffffff}
        intensity={1.2}
        position={[-1, 0, 2]}
      />
      <pointLight color="#FFFFFF" position={[-1, 0, 10]} intensity={1.5} />

      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
      <mesh ref={cloudsRef} position={[0, 0, 3.03]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.5}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, 0, 3]}>
        <sphereGeometry args={[2, 32, 32]} />
        <shaderMaterial
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent={true}
          opacity={0.9}
        />
      </mesh>
    </>
  );
}
