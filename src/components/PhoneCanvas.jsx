import { Suspense, useEffect, useState } from "react";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader } from "@components";

const Phone = ({ isMobile }) => {
  const phone = useGLTF("./models/phone/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
      />
      <pointLight intensity={1} />
      <primitive
        object={phone.scene}
        scale={isMobile ? 0.7 : 0.9}
        // position-y={0}
        rotation-y={0.9}
        position={isMobile ? [0, -0.5, 0] : [0, 0, 0]}
      />
    </mesh>
  );
};

const PhoneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  //Check if we are in mobile device
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 3, 1], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Phone isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PhoneCanvas;
