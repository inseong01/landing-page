import { Cloud, Clouds, Sky, Stars } from '@react-three/drei';
import { RootState, useFrame } from '@react-three/fiber';
import { useContext, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { setStarAmounts } from '../../../utils/functions/time/set-star-amounts';
import { TimezoneContext } from '../../../context/context-current-time';
import { setSunRayleigh } from '../../../utils/functions/time/set-sun-rayleigh';
import { setSunPosition } from '../../../utils/functions/time/set-sun-position';
import { setSunTurbidity } from '../../../utils/functions/time/set-sun-turbidity';

export default function BackgroundClouds() {
  const groupRef = useRef<THREE.Group>(null);
  const initialPosition = new THREE.Vector3();

  useEffect(() => {
    if (groupRef.current) {
      initialPosition.copy(groupRef.current.position);
    }
  }, []);

  function cloudMovementEffect(state: RootState) {
    if (!groupRef.current) return;

    // Three.js의 시간 경과 값
    const t = state.clock.getElapsedTime();

    // 회전 속도
    groupRef.current.rotation.y += 0.0002;

    // 원형 궤도 따라 이동
    const radius = 10;
    groupRef.current.position.x = initialPosition.x + Math.cos(t * 0.1) * radius;
    groupRef.current.position.z = initialPosition.z + Math.sin(t * 0.1) * radius;
  }

  useFrame(cloudMovementEffect);

  const betweenAmount = 500;
  const cloudIntensity = 500;
  const randomValue = Math.random();
  const cloudPatternSeed = randomValue >= 0.3 ? randomValue : 0.3;

  const timezone = useContext(TimezoneContext);
  const rayleighValue = setSunRayleigh(timezone);
  const sunPositions = setSunPosition(timezone);
  const turbidityValue = setSunTurbidity(timezone);

  return (
    <group ref={groupRef}>
      <SkyStars />
      <Sky
        sunPosition={sunPositions}
        rayleigh={rayleighValue}
        turbidity={turbidityValue}
        distance={5000}
      />
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
