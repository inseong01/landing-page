import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { Center, Cloud, Clouds, Sky, Stars, Text3D } from '@react-three/drei';
import { useContext, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

import { TIMEZONE } from '../../../utils/functions/time/get-current-timezon';
import { TimezoneContext } from '../../../context/context-current-time';
import { setSunPosition } from '../../../utils/functions/time/set-sun-position';
import { setSunRayleigh } from '../../../utils/functions/time/set-sun-rayleigh';
import { setSunTurbidity } from '../../../utils/functions/time/set-sun-turbidity';
import { setStarAmounts } from '../../../utils/functions/time/set-star-amounts';
import { setAmbientLightIntensity } from '../../../utils/functions/time/set-ambient-light-intensity';
import './background.css';

type GroupProps = {
  /** time based position of sun */
  timezone: TIMEZONE;
};

export function BannerBackground({ timezone }: GroupProps) {
  const intensity = setAmbientLightIntensity(timezone);

  return (
    <TimezoneContext.Provider value={timezone}>
      <Canvas shadows camera={{ position: [0, -150, 0], fov: 50, zoom: 1 }}>
        <FrontContent />
        <BackContent />
        <ambientLight intensity={intensity} />
      </Canvas>
    </TimezoneContext.Provider>
  );
}

function FrontContent() {
  return (
    <Center rotation={[-80, 0, 0]}>
      <MiddleText />
    </Center>
  );
}

function BackContent() {
  return (
    <Center>
      <SkySun />
      <SkyStars />
      <SkyClouds />
    </Center>
  );
}

/* components  */
function SkyClouds() {
  const precisionFix = (num: number) => Math.round(num * 10000) / 10000;
  const betweenAmount = 500;
  const cloudVolume = 500;
  const randomValue = precisionFix(Math.random());
  const cloudPatternSeed = randomValue >= 0.3 ? randomValue : 0.3;

  return (
    <Clouds material={THREE.MeshStandardMaterial} range={50}>
      <Cloud
        concentrate="inside"
        opacity={1}
        color={'white'}
        bounds={betweenAmount}
        volume={cloudVolume}
        seed={cloudPatternSeed}
      />
    </Clouds>
  );
}

function SkySun() {
  const timezone = useContext(TimezoneContext);
  const sunPositionsValue = setSunPosition(timezone);
  const rayleighValue = setSunRayleigh(timezone);
  const turbidityValue = setSunTurbidity(timezone);

  return (
    <Sky
      sunPosition={sunPositionsValue}
      rayleigh={rayleighValue}
      turbidity={turbidityValue}
      distance={5000}
    />
  );
}

function SkyStars() {
  const timezone = useContext(TimezoneContext);
  const starAmounts = setStarAmounts(timezone);
  const factorSize = 1;
  const scaleUpSpeed = 1;
  const starSphereRadius = 200;

  return (
    <Stars count={starAmounts} factor={factorSize} speed={scaleUpSpeed} radius={starSphereRadius} />
  );
}

function MiddleText() {
  const ref = useRef<THREE.Mesh>(null);
  const [isTriggered, setTrigger] = useState(false);
  const memoziedColor = useMemo(changeColor, [isTriggered]);
  const text = 'Good to see you';

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
