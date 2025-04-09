import { Cloud, Clouds } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export default function SkyClouds() {
  const precisionFix = (num: number) => Math.round(num * 10000) / 10000;

  /* cloud */
  const betweenAmount = 500;
  const cloudIntensity = 500;
  const randomValue = useRef(precisionFix(Math.random()));
  const cloudPatternSeed = randomValue.current >= 0.3 ? randomValue.current : 0.3;

  return (
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
  );
}
