import { Text3D } from '@react-three/drei';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

export default function BackgroundMiddleText() {
  const ref = useRef<THREE.Mesh>(null);
  const [isTriggered, setTrigger] = useState(false);
  const memoziedColor = useMemo(changeColor, [isTriggered]);
  const text = `Good to see you`;

  const over = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setTrigger(true);
  };

  const leave = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setTrigger(false);
  };

  function changeColor() {
    return new THREE.Color(isTriggered ? '#304E71' : '#fff');
  }

  function transitionTextValue() {
    if (!ref.current) return;
    const material = ref.current.material as THREE.MeshStandardMaterial;
    material.color.lerp(memoziedColor, 0.05);
  }

  useFrame(transitionTextValue);

  return (
    <group>
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
        castShadow
        ref={ref}
      >
        <meshStandardMaterial transparent opacity={0.5} />
        {text}
      </Text3D>
      <mesh position={[27, 2, 0]} rotation={[0, 0, 0]} onPointerOver={over} onPointerOut={leave}>
        <boxGeometry args={[58, 10, 0.5]} />
        <meshBasicMaterial transparent opacity={0.0} />
      </mesh>
    </group>
  );
}
