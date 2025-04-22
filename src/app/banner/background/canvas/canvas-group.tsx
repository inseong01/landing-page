import { RootState, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import SkyStars from "./element/element-stars";
import SkySun from "./element/element-sun";
import SkyClouds from "./element/element-clouds";

export default function CanvasElementsGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const initialPosition = useRef(new THREE.Vector3());
  const precisionFix = (num: number) => Math.round(num * 10000) / 10000;

  /* animation */
  function cloudMovementEffect(state: RootState) {
    if (!groupRef.current) return;

    // Three.js의 시간 경과 값
    const t = precisionFix(state.clock.getElapsedTime());

    // 회전 속도
    groupRef.current.rotation.y += 0.0001;

    // 원형 궤도 따라 이동
    const radius = 1;
    const cosValue = precisionFix(Math.cos(t * 0.1));
    const sinValue = precisionFix(Math.sin(t * 0.1));
    groupRef.current.position.x = initialPosition.current.x + cosValue * radius;
    groupRef.current.position.z = initialPosition.current.z + sinValue * radius;
  }

  useFrame(cloudMovementEffect);

  return (
    <group ref={groupRef}>
      <SkyStars />
      <SkySun />
      <SkyClouds />
    </group>
  );
}
