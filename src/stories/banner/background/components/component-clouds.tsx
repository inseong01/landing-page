import { Cloud, Clouds, Sky } from "@react-three/drei";
import { useContext } from "react";
import * as THREE from "three";

import { setAmbientLightIntensity } from "../../../../utils/functions/time/set-ambient-light-intensity";
import { setSunPosition } from "../../../../utils/functions/time/set-sun-position";
import { TimezoneContext } from "../../../../context/context-current-time";
import { SkyCloudsProps } from "../background-clouds";

export default function CloudsComp({
  color,
  bounds,
  volume,
  seed,
  isManualMode,
}: Omit<SkyCloudsProps, "timezone">) {
  const timezone = useContext(TimezoneContext);
  const intensity = setAmbientLightIntensity(timezone);
  const sunPosition = setSunPosition(timezone);

  return (
    <>
      <BackgroundClouds
        color={color}
        bounds={bounds}
        volume={volume}
        seed={seed}
        isManualMode={isManualMode}
      />
      <ambientLight intensity={intensity} />
      <Sky sunPosition={sunPosition} />
    </>
  );
}

function BackgroundClouds({
  color,
  bounds,
  volume,
  seed,
  isManualMode,
}: Omit<SkyCloudsProps, "timezone">) {
  console.log(seed);
  return (
    <Clouds material={THREE.MeshStandardMaterial} range={50}>
      <Cloud
        concentrate="inside"
        opacity={1}
        color={isManualMode ? color : "white"}
        bounds={isManualMode ? bounds : 500}
        volume={isManualMode ? volume : 500}
        seed={seed}
      />
    </Clouds>
  );
}
