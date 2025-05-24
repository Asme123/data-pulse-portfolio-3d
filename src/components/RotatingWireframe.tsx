
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const RotatingWireframe = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3;
      torusRef.current.rotation.y = time * 0.2;
      torusRef.current.position.x = Math.sin(time * 0.5) * 3;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2;
      sphereRef.current.rotation.z = time * 0.4;
      sphereRef.current.position.y = Math.cos(time * 0.3) * 2;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.y = time * 0.4;
      boxRef.current.rotation.z = time * 0.2;
      boxRef.current.position.z = Math.sin(time * 0.4) * 2;
    }
  });

  return (
    <group>
      {/* Torus */}
      <mesh ref={torusRef} position={[2, 0, -5]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" wireframe />
      </mesh>
      
      {/* Sphere */}
      <mesh ref={sphereRef} position={[-2, 2, -7]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#ec4899" wireframe />
      </mesh>
      
      {/* Box */}
      <mesh ref={boxRef} position={[-1, -2, -6]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial color="#3b82f6" wireframe />
      </mesh>
    </group>
  );
};
