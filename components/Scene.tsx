"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Node({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.25;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial color="#c9a227" metalness={0.55} roughness={0.25} />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} className="h-full w-full">
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 3]} intensity={1.2} color="#fff3c4" />
      <Node position={[-1.6, 0.4, 0]} />
      <Node position={[0.2, -0.3, 0.4]} />
      <Node position={[1.7, 0.6, -0.3]} />
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
        <ringGeometry args={[2.2, 2.24, 64]} />
        <meshBasicMaterial color="#c9a227" transparent opacity={0.35} />
      </mesh>
    </Canvas>
  );
}
