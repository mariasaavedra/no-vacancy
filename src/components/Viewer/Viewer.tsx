import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

import Loading from '@/components/Loading/Loading';
import Model from '@/components/Model/Model';

export default function Viewer() {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas dpr={[1, 2]} camera={{ fov: 30 }}>
        <ambientLight />
        <spotLight
          intensity={0.5}
          angle={0.2}
          penumbra={1}
          position={[5, 15, 10]}
        />
        <directionalLight position={[10, 10, 0]} intensity={500} />
        <directionalLight position={[-10, 10, 5]} intensity={500} />
        <directionalLight position={[-10, 500, 0]} intensity={500} />
        <directionalLight position={[0, -10, 0]} intensity={500} />
        <ambientLight />

        <Model />

        <OrbitControls autoRotateSpeed={8} enableZoom={false} autoRotate />
      </Canvas>
    </Suspense>
  );
}
