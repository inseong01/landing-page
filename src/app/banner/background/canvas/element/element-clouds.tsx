import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";

const precisionFix = (num: number) => Math.round(num * 10000) / 10000;
const randomValue = precisionFix(Math.random());

export default function SkyClouds() {
  /* cloud */
  const betweenAmount = 500;
  const cloudIntensity = 500;
  const cloudPatternSeed = randomValue >= 0.3 ? randomValue : 0.3;

  return (
    <Clouds material={THREE.MeshStandardMaterial} range={50}>
      <Cloud
        concentrate="inside"
        opacity={1}
        color={"white"}
        bounds={betweenAmount}
        volume={cloudIntensity}
        seed={cloudPatternSeed}
      />
    </Clouds>
  );
}
