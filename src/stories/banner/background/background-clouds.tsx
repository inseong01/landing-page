import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import { TIMEZONE } from "../../../utils/functions/time/get-current-timezon";
import { TimezoneContext } from "../../../context/context-current-time";
import CloudsComp from "./components/component-clouds";
import "./background.css";
import StoryBookViewFrame from "./components/component-frame";

export type SkyCloudsProps = {
  /** time based position of sun  */
  timezone: TIMEZONE;
  /** set properties of cloud manually
   *
   * if true, timezone will not be adjusted
   */
  isManualMode: boolean;
  /** color of cloud */
  color?: string;
  /** distance between each cloud */
  bounds?: number;
  /** volume of cloud */
  volume?: number;
  /** pattern of cloud */
  seed: number;
};

export function Clouds({
  timezone,
  color = "#fff",
  bounds = 500,
  volume = 500,
  seed = Math.random(),
  isManualMode = false,
}: SkyCloudsProps) {
  const position = new THREE.Vector3(0, -150, 0);
  const fov = 50;
  const zoom = 1;

  return (
    <TimezoneContext.Provider value={timezone}>
      <StoryBookViewFrame>
        <Canvas camera={{ position, fov, zoom }}>
          <CloudsComp
            color={color}
            bounds={bounds}
            volume={volume}
            seed={seed}
            isManualMode={isManualMode}
          />
        </Canvas>
      </StoryBookViewFrame>
    </TimezoneContext.Provider>
  );
}
