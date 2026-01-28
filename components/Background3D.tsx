'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { CityScene } from './Building3D';

export default function Background3D() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 pointer-events-none" />
      
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ 
          antialias: true, 
          alpha: true, 
          powerPreference: 'high-performance' 
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 8, 15]} fov={60} />
          <CityScene />
          <OrbitControls 
            enableZoom={true}
            minDistance={8}
            maxDistance={30}
            enablePan={true}
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2.1}
            minPolarAngle={Math.PI / 6}
            dampingFactor={0.05}
            rotateSpeed={0.6}
            target={[0, 2, 0]}
            enableDamping
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
