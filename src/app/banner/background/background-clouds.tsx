import { Cloud, Clouds, Sky, Stars } from '@react-three/drei';
import { RootState, useFrame } from '@react-three/fiber';
import { useContext, useEffect, useRef } from 'react';
import { Sky as SkyImpl } from 'three-stdlib';
import * as THREE from 'three';
import { setStarAmounts } from '../../../utils/functions/time/set-star-amounts';
import { TimezoneContext } from '../../../context/context-current-time';
import { setSunRayleigh } from '../../../utils/functions/time/set-sun-rayleigh';
import { setSunPosition } from '../../../utils/functions/time/set-sun-position';
import { setSunTurbidity } from '../../../utils/functions/time/set-sun-turbidity';
import { getCurrnetHourTimezone } from '../../../utils/functions/time/get-current-timezon';

export default function BackgroundClouds() {
  const groupRef = useRef<THREE.Group>(null);
  const initialPosition = useRef(new THREE.Vector3());
  const precisionFix = (num: number) => Math.round(num * 10000) / 10000;

  /* animation 1 */
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

  /* cloud */
  const betweenAmount = 500;
  const cloudIntensity = 500;
  const randomValue = useRef(precisionFix(Math.random()));
  const cloudPatternSeed = randomValue.current >= 0.3 ? randomValue.current : 0.3;

  /* sky */
  const skyRef = useRef<SkyImpl>(null);
  const timezone = useContext(TimezoneContext);
  const sunPositionsValue = setSunPosition(timezone);
  const rayleighValue = setSunRayleigh(timezone);
  const turbidityValue = setSunTurbidity(timezone);

  /* animation 2 */
  function skyPropsChangeEffect() {
    if (!skyRef.current) return;

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const isOneHourBeforeTimezoneChange = [3, 7, 11, 15, 19, 23].includes(currentHour);

    if (isOneHourBeforeTimezoneChange && currentMinutes !== 59) return;

    const nextTimezone = getCurrnetHourTimezone(currentHour + 1);
    const nextSunPositionsValue = setSunPosition(nextTimezone);
    const isSameSunPosition = sunPositionsValue.equals(nextSunPositionsValue);

    if (isSameSunPosition) return;

    const uniforms = skyRef.current.material.uniforms;
    uniforms.sunPosition.value.lerp(nextSunPositionsValue, 0.01);

    const nextRayleighValue = setSunRayleigh(timezone);
    uniforms.rayleigh.value = THREE.MathUtils.lerp(
      uniforms.rayleigh.value,
      nextRayleighValue,
      0.01
    );
  }

  useEffect(() => {
    if (groupRef.current) {
      initialPosition.current.copy(groupRef.current.position);
    }

    if (skyRef.current) {
      const uniforms = skyRef.current.material.uniforms;
      uniforms.sunPosition.value.copy(sunPositionsValue);
      uniforms.rayleigh.value = rayleighValue;
    }
  }, []);

  /* animation collector */
  function skyAnimation(state: RootState) {
    cloudMovementEffect(state);
    skyPropsChangeEffect();
  }

  useFrame(skyAnimation);

  return (
    <group ref={groupRef}>
      <SkyStars />
      <Sky ref={skyRef} turbidity={turbidityValue} distance={5000} />
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
