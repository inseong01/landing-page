import './App.css';
import { Suspense, useRef } from 'react';
import { Canvas, RootState, useFrame } from '@react-three/fiber';
import { Center, Cloud, Clouds, OrbitControls, Sky, Text3D } from '@react-three/drei';
import * as THREE from 'three';

export default function App() {
  return (
    <div className="app">
      <Canvas shadows camera={{ position: [0, -150, 0], fov: 50, zoom: 1 }}>
        <Suspense fallback={null}>
          <Center rotation={[80, 0, 0]}>
            <Text3D
              font={'/inter_bold.json'}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.1}
              height={0.5}
              lineHeight={0.5}
              letterSpacing={-0.06}
              size={5}
              rotateY={180}
            >
              <meshNormalMaterial />
              hello world
            </Text3D>
          </Center>
        </Suspense>
        <Center>
          <CloudsComponent />
        </Center>
        <ambientLight intensity={5} />
        <OrbitControls minPolarAngle={0} maxPolarAngle={0} />
      </Canvas>
    </div>
  );
}

function CloudsComponent() {
  const ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const betweenAmount = 500;
  const cloudIntensity = 300;
  const randomValue = Math.random();
  const cloudPatternSeed = randomValue >= 0.2 ? randomValue : 0.3;

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
