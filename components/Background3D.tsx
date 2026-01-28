"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { CityScene } from "./Building3D";

export default function Background3D() {
  const [lowPerf, setLowPerf] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ua = navigator.userAgent || "";
    const isMobile = /Mobi|Android|iPhone|iPad/.test(ua);
    const smallScreen = window.innerWidth < 768;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const memory = (navigator as any).deviceMemory ?? 4;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cores = (navigator as any).hardwareConcurrency ?? 4;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLowPerf(isMobile || smallScreen || memory < 4 || cores <= 4);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

      <Canvas
        frameloop="demand"
        dpr={lowPerf ? 0.7 : 0.85}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
          depth: true,
          stencil: false,
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 7, 14]} fov={58} />

          <CityScene lowPerf={lowPerf} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={!lowPerf}
            autoRotate
            autoRotateSpeed={lowPerf ? 0.08 : 0.15}
            enableDamping={false}
            target={[0, 2, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
