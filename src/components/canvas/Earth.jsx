import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

const RotatingGlobe = () => {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00d2ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#915EFF" />
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#1a1a4e" />
      </mesh>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.05, 16, 16]} />
        <meshStandardMaterial color="#00d2ff" wireframe opacity={0.3} transparent />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 6] }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RotatingGlobe />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
