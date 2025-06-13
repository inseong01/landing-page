import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import * as THREE from "three";

import { TIMEZONE } from "../../../app/banner/background-canvas/functions/time/get-current-timezon";
import { TimezoneContext } from "../../../app/banner/context";

import SunComp from "./components/component-sun";
import StoryBookViewFrame from "./components/component-frame";

export type SunProps = {
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
    <TimezoneContext.Provider value={timezone}>
      <StoryBookViewFrame>
        <Canvas camera={{ position, fov, zoom }}>
          <Center rotation={rotation}>
            <SunComp isManualMode={isManualMode} x={x} y={y} z={z} />
          </Center>
        </Canvas>
      </StoryBookViewFrame>
    </TimezoneContext.Provider>
  );
}
