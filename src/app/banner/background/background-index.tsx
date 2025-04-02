import { Center } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import BackgroundClouds from './background-clouds';
import BackgroundMiddleText from './background-text';

export default function BannerBackground() {
  return (
    <Canvas shadows camera={{ position: [0, -150, 0], fov: 50, zoom: 1 }}>
      <Suspense fallback={null}>
        <Center rotation={[-80, 0, 0]}>
          <BackgroundMiddleText />
        </Center>
      </Suspense>
      <Center>
        <BackgroundClouds />
      </Center>
      <ambientLight intensity={4} />
    </Canvas>
  );
}
