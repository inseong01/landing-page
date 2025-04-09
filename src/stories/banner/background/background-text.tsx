import { Center, Text3D } from '@react-three/drei';
import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

import './background.css';

type TextProps = {
  /** content of text */
  text: string;
  /** field of view of camera  */
  fov: number;
  /** zoom of camera */
  zoom: number;
  /** X position of camera */
  x: number;
  /** Y position of camera */
  y: number;
  /** Z position of camera */
  z: number;
  /** X rotation of camera */
  rotationX: number;
  /** Y rotation of camera */
  rotationY: number;
  /** Z rotation of camera */
  rotationZ: number;
};

export function Text({
  fov = 50,
  zoom = 1,
  text = 'Good to see you',
  x = 0,
  y = -150,
  z = 0,
  rotationX = -80,
  rotationY = 0,
  rotationZ = 0,
}: TextProps) {
  const position = { x, y, z };
  const rotation = new THREE.Euler(rotationX, rotationY, rotationZ);

  return (
    <Canvas camera={{ position: [x, y, z], fov, zoom }}>
      <MiddleTextBox fov={fov} zoom={zoom} text={text} position={position} rotation={rotation} />
      <ambientLight intensity={4} />
    </Canvas>
  );
}

function MiddleTextBox({
  fov,
  zoom,
  text,
  position,
  rotation,
}: {
  fov: number;
  zoom: number;
  text: string;
  position: { x: number; y: number; z: number };
  rotation: THREE.Euler;
}) {
  const { camera } = useThree();
  const perspectiveCam = camera as THREE.PerspectiveCamera;

  useEffect(() => {
    perspectiveCam.zoom = zoom;
    perspectiveCam.fov = fov;
    perspectiveCam.position.set(position.x, position.y, position.z);
    perspectiveCam.updateProjectionMatrix();
  }, [fov, zoom, position]);

  return (
    <Center rotation={rotation}>
      <MiddleText text={text} />
    </Center>
  );
}

function MiddleText({ text }: { text: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const [isTriggered, setTrigger] = useState(false);
  const memoziedColor = useMemo(changeColor, [isTriggered]);

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
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
}
