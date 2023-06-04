import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
export default function Scene(props) {
  const { nodes, materials } = useGLTF("models/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={1} />
      {/* <OrbitControls /> */}
      <mesh
        geometry={nodes.GeoSphere001_1.geometry}
        material={materials["01___Default"]}
      />
      <mesh
        geometry={nodes.GeoSphere001_1_1.geometry}
        material={materials["03___Default"]}
      />
      <mesh
        geometry={nodes.GeoSphere001_1_2.geometry}
        material={materials["02___Default"]}
      />
      <mesh
        geometry={nodes.GeoSphere001_1_3.geometry}
        material={materials["07___Default"]}
      />
      <mesh
        geometry={nodes.GeoSphere001_1_4.geometry}
        material={materials["04___Default"]}
      />
      <mesh
        geometry={nodes.GeoSphere001_1_5.geometry}
        material={materials["08___Default"]}
      />
      <mesh
        geometry={nodes.GeoSphere001_1_6.geometry}
        material={materials.Material__204}
      />
    </group>
  );
}

useGLTF.preload("models/scene.gltf");
