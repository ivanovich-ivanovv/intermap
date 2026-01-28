'use client';

import { useEffect, useState } from 'react';
import Background2D from './Background2D';
import Background3D from './Background3D';

export default function BackgroundSwitch() {
  const [use3D, setUse3D] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Check localStorage for user preference
    const saved = localStorage.getItem('use3d');
    if (saved !== null) {
      setUse3D(saved === 'true');
    } else {
      // Auto-detect: disable 3D on very low-end devices
      const ua = navigator.userAgent || '';
      const isMobile = /Mobi|Android|iPhone|iPad/.test(ua);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const memory = (navigator as any).deviceMemory ?? 4;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cores = (navigator as any).hardwareConcurrency ?? 4;
      
      // Use 2D if low-end phone
      const shouldUse3D = !(isMobile && (memory < 2 || cores <= 2));
      setUse3D(shouldUse3D);
    }
  }, []);

  if (!mounted) return <Background2D />;

  return (
    <>
      {use3D ? <Background3D /> : <Background2D />}
      
      {/* Toggle Button */}
      <button
        onClick={() => {
          const newVal = !use3D;
          setUse3D(newVal);
          localStorage.setItem('use3d', String(newVal));
        }}
        className="fixed bottom-6 right-6 z-50 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs rounded-full shadow-lg transition-all hover:scale-105"
        title="Toggle between 3D and 2D background"
      >
        {use3D ? '3D' : '2D'}
      </button>
    </>
  );
}
