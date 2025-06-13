import { Canvas, RootState, useFrame } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import * as THREE from "three";
import { useContext, useRef } from "react";
import { useSetAtom } from "jotai";

import { canvasMountAtom } from "../../../utils/store/atoms";

import { setAmbientLightIntensity } from "./functions/time/set-ambient-light-intensity";
import { TimezoneContext } from "../context";

import SkyStars from "./element/element-stars";
import SkySun from "./element/element-sun";
import SkyClouds from "./element/element-clouds";

export default function BannerBackgroundCanvas() {
  const setCanvasMount = useSetAtom(canvasMountAtom);
  const currentTimezone = useContext(TimezoneContext);

  const intensity = setAmbientLightIntensity(currentTimezone);

  /* 캠버스 마운트 여부  */
  function onCreatedCanvas() {
    setCanvasMount(true);
  }

  return (
    <Canvas
      onCreated={onCreatedCanvas}
      shadows
      camera={{ position: [0, -150, 0], fov: 60, zoom: 1 }}
    >
      <Center>
        {/* 캔버스 요소 모음 */}
        <CanvasElementsGroup />
      </Center>

      {/* 조명 */}
      <ambientLight intensity={intensity} />

      {/* 카메라 궤도 */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

function CanvasElementsGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const initialPosition = useRef(new THREE.Vector3());
  const precisionFix = (num: number) => Math.round(num * 10000) / 10000;

  /* 구름 이동 */
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
      {/* 별 */}
      <SkyStars />

      {/* 태양 */}
      <SkySun />

      {/* 구름 */}
      <SkyClouds />
    </group>
  );
}
