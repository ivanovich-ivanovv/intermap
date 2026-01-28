"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Environment, MeshReflectorMaterial, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export function Building3D({
  position,
  scale = 1,
  color = "#ff6b35",
  lowPerf = false,
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
  lowPerf?: boolean;
}) {
  const buildingRef = useRef<THREE.Group>(null);
  const windowLightRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (buildingRef.current) {
      // Subtle rotation with damping
      buildingRef.current.rotation.y = Math.sin(time * 0.2) * 0.05;
      // Smooth floating animation (reduced on lowPerf)
      buildingRef.current.position.y = position[1] + Math.sin(time * (lowPerf ? 0.2 : 0.4)) * (lowPerf ? 0.03 : 0.08);
    }

    // Pulsing window lights (skip heavy per-window updates on lowPerf)
    if (windowLightRef.current && !lowPerf) {
      windowLightRef.current.children.forEach((window, i) => {
        const mesh = window as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.emissiveIntensity = 0.3 + Math.sin(time * 2 + i * 0.5) * 0.2;
      });
    }
  });

  // Generate random window pattern
  const windows = useMemo(() => {
    const windowArray: { position: [number, number, number]; active: boolean }[] = [];
    const floors = lowPerf ? 5 : 8;
    const windowsPerFloor = lowPerf ? 2 : 3;
    
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
  }, [lowPerf]);

  return (
    <group ref={buildingRef} position={position} scale={scale}>
      {/* Main Building with glass-like material */}
      <Box args={[1, 3, 1]} position={[0, 1.5, 0]} castShadow={!lowPerf} receiveShadow={!lowPerf}>
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
        castShadow={!lowPerf}
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
      <Cylinder args={[0.02, 0.02, 0.6, 8]} position={[0, 3.6, 0]} castShadow={!lowPerf}>
        <meshStandardMaterial
          color="#C0C0C0"
          metalness={1}
          roughness={0}
          emissive="#ff6b35"
          emissiveIntensity={0.2}
        />
      </Cylinder>

      {/* Location Pin with glow */}
      <Float speed={lowPerf ? 1 : 2} rotationIntensity={0.5} floatIntensity={lowPerf ? 0.15 : 0.5}>
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
          <Box args={[0.3, 0.3, 0.3]} position={[0, 0.1, 0]} castShadow={!lowPerf}>
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
      <Cylinder args={[0.6, 0.7, 0.1, 32]} position={[0, 0.05, 0]} receiveShadow={!lowPerf}>
        <meshStandardMaterial
          color="#2D3748"
          metalness={0.8}
          roughness={0.3}
        />
      </Cylinder>
    </group>
  );
}
export function CityScene({ lowPerf = false }: { lowPerf?: boolean }) {
  const fogColor = new THREE.Color("#0a0a0a");
  
  return (
    <>
      {/* Professional Lighting Setup */}
      <ambientLight intensity={lowPerf ? 0.15 : 0.3} color="#ffffff" />
      
      {/* Key Light - Main illumination (disabled shadows on lowPerf) */}
      <directionalLight
        position={[10, 15, 5]}
        intensity={lowPerf ? 1.2 : 1.5}
        castShadow={!lowPerf}
        shadow-mapSize-width={lowPerf ? 512 : 2048}
        shadow-mapSize-height={lowPerf ? 512 : 2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />
      
      {/* Fill Light - Orange accent (reduced on lowPerf) */}
      <pointLight position={[-8, 10, -8]} intensity={lowPerf ? 0.7 : 1.2} color="#ff6b35" distance={20} decay={2} />
      <pointLight position={[8, 8, 8]} intensity={lowPerf ? 0.6 : 1} color="#f7931e" distance={20} decay={2} />
      
      {/* Rim Light - Blue contrast (optional on lowPerf) */}
      {!lowPerf && <pointLight position={[0, 5, -10]} intensity={0.8} color="#87CEEB" distance={15} decay={2} />}
      
      {/* Spot lights disabled on lowPerf */}
      {!lowPerf && (
        <spotLight
          position={[0, 20, 0]}
          angle={0.5}
          penumbra={1}
          intensity={1}
          castShadow
          color="#FFE87C"
        />
      )}

      {/* Environment map disabled on lowPerf */}
      {!lowPerf && <Environment preset="city" />}

      {/* Fog for depth */}
      <fog attach="fog" args={[fogColor, 10, 30]} />

      {/* Premium Building Cluster */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Building3D position={[-3.5, 0, -1]} scale={0.9} color="#ff6b35" lowPerf={lowPerf} />
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <Building3D position={[0, 0, -2.5]} scale={1.3} color="#f7931e" lowPerf={lowPerf} />
      </Float>
      
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.25}>
        <Building3D position={[3.5, 0, -0.5]} scale={1} color="#ff8c42" lowPerf={lowPerf} />
      </Float>
      
      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.35}>
        <Building3D position={[-2.5, 0, 2]} scale={0.75} color="#ff9966" lowPerf={lowPerf} />
      </Float>
      
      <Float speed={0.9} rotationIntensity={0.2} floatIntensity={0.3}>
        <Building3D position={[3, 0, 2.5]} scale={1.1} color="#ffaa66" lowPerf={lowPerf} />
      </Float>

      {/* Reflective Ground with professional material */}
      <Box args={[25, 0.2, 25]} position={[0, -0.1, 0]} receiveShadow={!lowPerf}>
        <MeshReflectorMaterial
          blur={[lowPerf ? 30 : 400, lowPerf ? 10 : 100]}
          resolution={lowPerf ? 256 : 1024}
          mixBlur={lowPerf ? 0.3 : 1}
          mixStrength={lowPerf ? 0.2 : 0.5}
          roughness={0.8}
          depthScale={lowPerf ? 0 : 1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#1a202c"
          metalness={0.6}
        />
      </Box>

      {/* Grid lines disabled on lowPerf */}
      {!lowPerf && <gridHelper args={[25, 50, '#ff6b35', '#2D3748']} position={[0, 0.01, 0]} />}

      {/* Sparkles for magical effect - minimal on lowPerf */}
      <Sparkles
        count={lowPerf ? 6 : 100}
        scale={lowPerf ? 4 : 15}
        size={lowPerf ? 0.8 : 2}
        speed={lowPerf ? 0.1 : 0.3}
        opacity={lowPerf ? 0.3 : 0.6}
        color="#ff6b35"
      />

      {/* Animated light orbs - disabled on lowPerf */}
      {!lowPerf && (() => {
        const n = 8;
        return [...Array(n)].map((_, idx) => {
          const angle = (idx / n) * Math.PI * 2;
          const radius = 8;
          return (
            <Float
              key={idx}
              speed={2 + idx * 0.2}
              rotationIntensity={0.5}
              floatIntensity={1}
            >
              <Box
                args={[0.15, 0.15, 0.15]}
                position={[
                  Math.cos(angle) * radius,
                  2 + Math.sin(idx) * 2,
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
        });
      })()}

      {/* Floating data particles - minimal on lowPerf */}
      {[...Array(lowPerf ? 4 : 30)].map((_, i) => (
        <Float
          key={`particle-${i}`}
          // eslint-disable-next-line react-hooks/purity
          speed={1 + Math.random() * 0.5}
          rotationIntensity={lowPerf ? 0.2 : 0.5}
          floatIntensity={lowPerf ? 0.3 : 2}
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
              emissiveIntensity={lowPerf ? 0.5 : 1}
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
