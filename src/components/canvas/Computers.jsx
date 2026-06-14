import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, MeshDistortMaterial, Sphere } from "@react-three/drei";

const AnimatedSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#915EFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d2ff" />
      <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#915EFF"
          attach="material"
          distort={0.4}
          speed={2}
          wireframe={false}
        />
      </Sphere>
      {/* Outer wireframe ring */}
      <Sphere visible args={[1.05, 32, 32]} scale={2.4}>
        <meshStandardMaterial color="#00d2ff" wireframe opacity={0.15} transparent />
      </Sphere>
    </group>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <AnimatedSphere />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
