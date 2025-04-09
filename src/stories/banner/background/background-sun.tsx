import { Canvas } from '@react-three/fiber';
import { Center, Sky } from '@react-three/drei';
import * as THREE from 'three';

import { setSunPosition } from '../../../utils/functions/time/set-sun-position';
import { setSunRayleigh } from '../../../utils/functions/time/set-sun-rayleigh';
import { setSunTurbidity } from '../../../utils/functions/time/set-sun-turbidity';
import { TIMEZONE } from '../../../utils/functions/time/get-current-timezon';
import './background.css';

type SunProps = {
  /** time based position of sun */
  timezone: TIMEZONE;
  /** set sun position manually
   *
   * if true, timezone will not be adjusted
   */
  isManualMode: boolean;
  /** X position of sun */
  x?: number;
  /** Y position of sun */
  y?: number;
  /** Z position of sun */
  z?: number;
};

export function Sun({ timezone, isManualMode = false, x, y, z }: SunProps) {
  const position = new THREE.Vector3(0, -150, 0);
  const rotation = new THREE.Euler(-80, 0, 0);
  const fov = 50;
  const zoom = 1;

  return (
    <Canvas camera={{ position, fov, zoom }}>
      <Center rotation={rotation}>
        <SkySun timezone={timezone} isManualMode={isManualMode} x={x} y={y} z={z} />
      </Center>
    </Canvas>
  );
}

function SkySun({ timezone, isManualMode, x, y, z }: SunProps) {
  const sunPositionsValue = isManualMode ? new THREE.Vector3(x, y, z) : setSunPosition(timezone);
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
