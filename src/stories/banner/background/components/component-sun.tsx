import { Sky } from "@react-three/drei";
import { useContext } from "react";
import * as THREE from "three";

import { TimezoneContext } from "../../../../context/context-current-time";
import { setSunPosition } from "../../../../utils/functions/time/set-sun-position";
import { setSunRayleigh } from "../../../../utils/functions/time/set-sun-rayleigh";
import { setSunTurbidity } from "../../../../utils/functions/time/set-sun-turbidity";
import { SunProps } from "../background-sun";

export default function SunComp({
  isManualMode,
  x,
  y,
  z,
}: Omit<SunProps, "timezone">) {
  const timezone = useContext(TimezoneContext);
  const sunPositionsValue = isManualMode
    ? new THREE.Vector3(x, y, z)
    : setSunPosition(timezone);
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
