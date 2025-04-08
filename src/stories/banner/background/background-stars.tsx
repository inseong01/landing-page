import { Sky, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { setStarAmounts } from '../../../utils/functions/time/set-star-amounts';
import { TIMEZONE } from '../../../utils/functions/time/get-current-timezon';
import './background.css';

type SkyStarsProps = {
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

export function SkyStars({
  timezone,
  factorSize = 1,
  scaleUpSpeed = 1,
  starSphereRadius = 200,
  count = 1000,
  isManualMode = false,
}: SkyStarsProps) {
  const starAmounts = !isManualMode ? setStarAmounts(timezone) : count;

  return (
    <Canvas>
      <Sky sunPosition={[0, 0, 0]} />
      <Stars
        count={starAmounts}
        factor={factorSize}
        speed={scaleUpSpeed}
        radius={starSphereRadius}
      />
    </Canvas>
  );
}
