import { Cloud, Clouds, Sky, Stars } from '@react-three/drei';
import { RootState, useFrame } from '@react-three/fiber';
import { useContext, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { setStarAmounts } from '../../../utils/functions/time/set-star-amounts';
import { TimezoneContext } from '../../../context/context-current-time';
import { setSunRayleigh } from '../../../utils/functions/time/set-sun-rayleigh';
import { setSunPosition } from '../../../utils/functions/time/set-sun-position';
import { setSunTurbidity } from '../../../utils/functions/time/set-sun-turbidity';
import { Sky as SkyImpl } from 'three-stdlib';
import { getCurrnetHourTimezone } from '../../../utils/functions/time/get-current-timezon';

export default function BackgroundClouds() {
  const groupRef = useRef<THREE.Group>(null);
  const initialPosition = useRef(new THREE.Vector3());
  const precisionFix = (num: number) => Math.round(num * 10000) / 10000;

  useEffect(() => {
    if (groupRef.current) {
      initialPosition.current.copy(groupRef.current.position);
    }
  }, []);

  function cloudMovementEffect(state: RootState) {
    if (!groupRef.current) return;

    // Three.js의 시간 경과 값
    const t = precisionFix(state.clock.getElapsedTime());

    // 회전 속도
    groupRef.current.rotation.y += 0.0002;

    // 원형 궤도 따라 이동
    const radius = 1;
    const cosValue = precisionFix(Math.cos(t * 0.1));
    const sinValue = precisionFix(Math.sin(t * 0.1));
    groupRef.current.position.x = initialPosition.current.x + cosValue * radius;
    groupRef.current.position.z = initialPosition.current.z + sinValue * radius;
  }

  useFrame(cloudMovementEffect);

  const betweenAmount = 500;
  const cloudIntensity = 500;

  const randomValue = useRef(precisionFix(Math.random()));
  const cloudPatternSeed = randomValue.current >= 0.3 ? randomValue.current : 0.3;

  const skyRef = useRef<SkyImpl>(null);
  const timezone = useContext(TimezoneContext);
  const sunPositions = setSunPosition(timezone);
  const rayleighValue = setSunRayleigh(timezone);
  const turbidityValue = setSunTurbidity(timezone);
  const currentSunRef = useRef(new THREE.Vector3(...sunPositions));

  function skyPropsChangeEffect(state: RootState) {
    if (!skyRef.current) return;

    // 기준값: 현재 시간 범위 값
    // 변경값: 다음 시간 범위 값
    // 현재값: 기준값이 일정 값과 더해진 값, 변경값을 초과할 수 없음
    // 해당 시간이 되면 변하도록 적용

    const currentHour = new Date().getHours();
    const nextTimezone = getCurrnetHourTimezone(currentHour + 4);
    const nextSunVec = new THREE.Vector3(...setSunPosition(nextTimezone));

    currentSunRef.current.lerp(nextSunVec, 0.05);
    skyRef.current.material.uniforms.sunPosition.value.copy(currentSunRef.current);

    // rayleigh 보간

    // turbidity 보간
  }

  useEffect(() => {
    if (skyRef.current) {
      skyRef.current.material.uniforms.sunPosition.value.copy(new THREE.Vector3(...sunPositions));
    }
  }, []);

  useFrame(skyPropsChangeEffect);

  return (
    <group ref={groupRef}>
      <SkyStars />
      <Sky ref={skyRef} rayleigh={rayleighValue} turbidity={turbidityValue} distance={5000} />
      <Clouds material={THREE.MeshStandardMaterial} range={50}>
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

function SkyStars() {
  const timezone = useContext(TimezoneContext);
  const count = setStarAmounts(timezone);
  const factorSize = 1;
  const scaleUpSpeed = 1;
  const starSphereRadius = 200;

  return <Stars count={count} factor={factorSize} speed={scaleUpSpeed} radius={starSphereRadius} />;
}
