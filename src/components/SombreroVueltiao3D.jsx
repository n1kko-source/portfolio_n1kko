import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import sombreroModel from "../assets/sombrero_vueltiao_colombia.glb";

useGLTF.preload(sombreroModel);

const SombreroModel = ({ isHovered }) => {
  const groupRef = useRef();
  const { scene } = useGLTF(sombreroModel);
  const model = useMemo(() => scene.clone(), [scene]);

  useFrame(() => {
    if (!groupRef.current) return;
    const amplitude = isHovered ? 0.14 : 0.09;
    groupRef.current.position.y = Math.sin(performance.now() * 0.0014) * amplitude;
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={model} scale={3.4} />
      </Center>
    </group>
  );
};

const LoadingFallback = () => (
  <mesh>
    <sphereGeometry args={[0.5, 16, 16]} />
    <meshStandardMaterial color="#D4A574" wireframe />
  </mesh>
);

export const SombreroVueltiao3D = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sombrero-canvas group relative mx-auto h-80 w-full max-w-md md:h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pointer-events-none absolute inset-2 rounded-full bg-gradient-to-b from-sol-300/25 via-transparent to-montana-300/10 transition-opacity duration-500 group-hover:from-sol-400/35" />

      <p className="pointer-events-none absolute bottom-2 left-0 right-0 z-10 text-center text-xs text-tierra-400 opacity-70 transition-opacity group-hover:opacity-100">
        Drag to rotate · Scroll to zoom
      </p>

      <Canvas
        camera={{ position: [0, 1.4, 4.2], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-4, 3, -3]} intensity={0.45} />
        <Suspense fallback={<LoadingFallback />}>
          <SombreroModel isHovered={isHovered} />
          <ContactShadows position={[0, -1.1, 0]} opacity={0.35} scale={8} blur={2.5} />
          <Environment preset="apartment" />
          <OrbitControls
            enablePan={false}
            autoRotate
            autoRotateSpeed={isHovered ? 2.8 : 1.4}
            minDistance={2.8}
            maxDistance={7}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 1.8}
            enableDamping
            dampingFactor={0.06}
            rotateSpeed={1.1}
            zoomSpeed={0.9}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SombreroVueltiao3D;
