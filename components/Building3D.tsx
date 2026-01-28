"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Environment, MeshReflectorMaterial, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export function Building3D({
  position,
  scale = 1,
  color = "#ff6b35",
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
}) {
  const buildingRef = useRef<THREE.Group>(null);
  const windowLightRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (buildingRef.current) {
      // Subtle rotation with damping
      buildingRef.current.rotation.y = Math.sin(time * 0.2) * 0.05;
      // Smooth floating animation
      buildingRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.08;
    }

    // Pulsing window lights
    if (windowLightRef.current) {
      windowLightRef.current.children.forEach((window, i) => {
        const mesh = window as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.emissiveIntensity = 0.3 + Math.sin(time * 2 + i * 0.5) * 0.2;
      });
    }
  });

  // Generate random window pattern
  const windows = useMemo(() => {
    const windowArray = [];
    const floors = 8;
    const windowsPerFloor = 3;
    
    for (let floor = 0; floor < floors; floor++) {
      for (let col = 0; col < windowsPerFloor; col++) {
        windowArray.push({
          position: [
            (col - 1) * 0.3,
            0.4 + floor * 0.35,
            0.51,
          ] as [number, number, number],
          // eslint-disable-next-line react-hooks/purity
          active: Math.random() > 0.3, // 70% windows are lit
        });
      }
    }
    return windowArray;
  }, []);

  return (
    <group ref={buildingRef} position={position} scale={scale}>
      {/* Main Building with glass-like material */}
      <Box args={[1, 3, 1]} position={[0, 1.5, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial
          color={color}
          metalness={0.6}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.8}
          envMapIntensity={1.5}
        />
      </Box>

      {/* Windows with dynamic lighting */}
      <group ref={windowLightRef}>
        {windows.map((window, i) => (
          <Box key={i} args={[0.15, 0.25, 0.02]} position={window.position}>
            <meshStandardMaterial
              color={window.active ? "#FFE87C" : "#4A5568"}
              emissive={window.active ? "#FFD700" : "#2D3748"}
              emissiveIntensity={window.active ? 0.5 : 0.1}
              transparent
              opacity={0.9}
              metalness={0.8}
              roughness={0.2}
            />
          </Box>
        ))}
      </group>

      {/* Building edges with neon glow */}
      <Box args={[1.02, 3.02, 1.02]} position={[0, 1.5, 0]}>
        <meshBasicMaterial
          color="#ff6b35"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Box>

      {/* Roof with premium material */}
      <Cylinder
        args={[0.7, 0.7, 0.3, 4]}
        position={[0, 3.15, 0]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color="#f7931e"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2}
        />
      </Cylinder>

      {/* Antenna/Spire on top */}
      <Cylinder args={[0.02, 0.02, 0.6, 8]} position={[0, 3.6, 0]} castShadow>
        <meshStandardMaterial
          color="#C0C0C0"
          metalness={1}
          roughness={0}
          emissive="#ff6b35"
          emissiveIntensity={0.2}
        />
      </Cylinder>

      {/* Location Pin with glow */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[0, 4, 0]}>
          {/* Pin body */}
          <Cylinder args={[0.15, 0.01, 0.5, 8]} position={[0, -0.25, 0]}>
            <meshPhysicalMaterial
              color="#ff8c42"
              emissive="#ff8c42"
              emissiveIntensity={1.2}
              metalness={0.5}
              roughness={0.2}
              clearcoat={1}
            />
          </Cylinder>
          {/* Pin head */}
          <Box args={[0.3, 0.3, 0.3]} position={[0, 0.1, 0]} castShadow>
            <meshPhysicalMaterial
              color="#ff6b35"
              emissive="#ff6b35"
              emissiveIntensity={1.5}
              metalness={0.8}
              roughness={0.1}
              clearcoat={1}
            />
          </Box>
          {/* Glow halo */}
          <Box args={[0.5, 0.5, 0.5]} position={[0, 0.1, 0]}>
            <meshBasicMaterial
              color="#ff6b35"
              transparent
              opacity={0.3}
              side={THREE.BackSide}
            />
          </Box>
        </group>
      </Float>

      {/* Base platform */}
      <Cylinder args={[0.6, 0.7, 0.1, 32]} position={[0, 0.05, 0]} receiveShadow>
        <meshStandardMaterial
          color="#2D3748"
          metalness={0.8}
          roughness={0.3}
        />
      </Cylinder>
    </group>
  );
}

export function CityScene() {
  const fogColor = new THREE.Color("#0a0a0a");
  
  return (
    <>
      {/* Professional Lighting Setup */}
      <ambientLight intensity={0.3} color="#ffffff" />
      
      {/* Key Light - Main illumination */}
      <directionalLight
        position={[10, 15, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />
      
      {/* Fill Light - Orange accent */}
      <pointLight position={[-8, 10, -8]} intensity={1.2} color="#ff6b35" distance={20} decay={2} />
      <pointLight position={[8, 8, 8]} intensity={1} color="#f7931e" distance={20} decay={2} />
      
      {/* Rim Light - Blue contrast */}
      <pointLight position={[0, 5, -10]} intensity={0.8} color="#87CEEB" distance={15} decay={2} />
      
      {/* Spot lights for dramatic effect */}
      <spotLight
        position={[0, 20, 0]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        castShadow
        color="#FFE87C"
      />

      {/* Environment map for realistic reflections */}
      <Environment preset="city" />

      {/* Fog for depth */}
      <fog attach="fog" args={[fogColor, 10, 30]} />

      {/* Premium Building Cluster */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Building3D position={[-3.5, 0, -1]} scale={0.9} color="#ff6b35" />
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <Building3D position={[0, 0, -2.5]} scale={1.3} color="#f7931e" />
      </Float>
      
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.25}>
        <Building3D position={[3.5, 0, -0.5]} scale={1} color="#ff8c42" />
      </Float>
      
      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.35}>
        <Building3D position={[-2.5, 0, 2]} scale={0.75} color="#ff9966" />
      </Float>
      
      <Float speed={0.9} rotationIntensity={0.2} floatIntensity={0.3}>
        <Building3D position={[3, 0, 2.5]} scale={1.1} color="#ffaa66" />
      </Float>

      {/* Reflective Ground with professional material */}
      <Box args={[25, 0.2, 25]} position={[0, -0.1, 0]} receiveShadow>
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={0.5}
          roughness={0.8}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#1a202c"
          metalness={0.6}
        />
      </Box>

      {/* Grid lines for tech feel */}
      <gridHelper args={[25, 50, '#ff6b35', '#2D3748']} position={[0, 0.01, 0]} />

      {/* Sparkles for magical effect */}
      <Sparkles
        count={100}
        scale={15}
        size={2}
        speed={0.3}
        opacity={0.6}
        color="#ff6b35"
      />

      {/* Animated light orbs */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 8;
        return (
          <Float
            key={i}
            speed={2 + i * 0.2}
            rotationIntensity={0.5}
            floatIntensity={1}
          >
            <Box
              args={[0.15, 0.15, 0.15]}
              position={[
                Math.cos(angle) * radius,
                2 + Math.sin(i) * 2,
                Math.sin(angle) * radius,
              ]}
            >
              <meshPhysicalMaterial
                color="#ff6b35"
                emissive="#ff6b35"
                emissiveIntensity={2}
                transparent
                opacity={0.8}
                metalness={1}
                roughness={0}
                clearcoat={1}
              />
            </Box>
          </Float>
        );
      })}

      {/* Floating data particles */}
      {[...Array(30)].map((_, i) => (
        <Float
          key={`particle-${i}`}
          // eslint-disable-next-line react-hooks/purity
          speed={1 + Math.random()}
          rotationIntensity={0.5}
          floatIntensity={2}
        >
          <Box
            args={[0.08, 0.08, 0.08]}
            position={[
              // eslint-disable-next-line react-hooks/purity
              (Math.random() - 0.5) * 12,
              // eslint-disable-next-line react-hooks/purity
              Math.random() * 6 + 1,
              // eslint-disable-next-line react-hooks/purity
              (Math.random() - 0.5) * 12,
            ]}
          >
            <meshStandardMaterial
              color="#FFE87C"
              emissive="#f7931e"
              emissiveIntensity={1}
              transparent
              opacity={0.7}
              metalness={0.8}
              roughness={0.2}
            />
          </Box>
        </Float>
      ))}
    </>
  );
}
