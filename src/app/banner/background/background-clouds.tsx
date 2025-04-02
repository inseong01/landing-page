import { Cloud, Clouds, Sky } from '@react-three/drei';
import { RootState, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundClouds() {
  const ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const betweenAmount = 500;
  const cloudIntensity = 500;
  const randomValue = Math.random();
  const cloudPatternSeed = randomValue >= 0.3 ? randomValue : 0.3;

  function cloudMovementEffect(state: RootState) {
    if (!ref.current) return;

    // Three.js의 시간 경과 값
    const t = state.clock.elapsedTime;

    // 천천히 흔들리는 효과
    ref.current.rotation.y = t * 0.02;

    // 원형 경로를 따라 구름이 이동하는 효과
    const radius = 10;
    ref.current.position.x = Math.sin(t * 0.01) * radius;
    ref.current.position.z = Math.sin(t * 0.01) * radius;
  }

  useFrame(cloudMovementEffect);

  return (
    <group ref={ref}>
      <Sky />
      <Clouds material={THREE.MeshStandardMaterial}>
        <Cloud
          concentrate="inside"
          opacity={1}
          color={'white'}
          bounds={betweenAmount}
          volume={cloudIntensity}
          seed={cloudPatternSeed}
        />
      </Clouds>
    </group>
  );
}
