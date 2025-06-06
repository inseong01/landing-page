import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { TIMEZONE } from "../../../utils/functions/time/get-current-timezon";
import { TimezoneContext } from "../../../context/context";

import StarsComp from "./components/component-stars";
import StoryBookViewFrame from "./components/component-frame";
import "./background.css";

export type SkyStarsProps = {
  /** time based position of stars */
  timezone: TIMEZONE;
  /** set amount of stars manually
   *
   * if true, timezone will not be adjusted
   */
  isManualMode: boolean;
  /** amount of stars */
  count?: number;
  /** size of star */
  factorSize?: number;
  /** speed of scale up animation of star */
  scaleUpSpeed?: number;
  /** radius of star */
  starSphereRadius?: number;
};

export function Stars({
  timezone,
  factorSize = 1,
  scaleUpSpeed = 1,
  starSphereRadius = 200,
  count = 1000,
  isManualMode = false,
}: SkyStarsProps) {
  return (
    <TimezoneContext.Provider value={timezone}>
      <StoryBookViewFrame>
        <Canvas>
          <Sky sunPosition={[0, 0, 0]} />
          <StarsComp
            count={count}
            factorSize={factorSize}
            scaleUpSpeed={scaleUpSpeed}
            starSphereRadius={starSphereRadius}
            isManualMode={isManualMode}
          />
        </Canvas>
      </StoryBookViewFrame>
    </TimezoneContext.Provider>
  );
}
