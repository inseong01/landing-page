import { Sky, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { setStarAmounts } from '../../../utils/functions/time/set-star-amounts';
import { TIMEZONE } from '../../../utils/functions/time/get-current-timezon';
import './background.css';

type SkyStarsProps = {
  /** time based position of stars */
  timezone: TIMEZONE;
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
  ...props
}: SkyStarsProps) {
  const starAmounts = count ? count : timezone ? setStarAmounts(timezone) : 1000;

  return (
    <Canvas>
      <Sky sunPosition={[0, 0, 0]} />
      <Stars
        count={starAmounts}
        factor={factorSize}
        speed={scaleUpSpeed}
        radius={starSphereRadius}
        {...props}
      />
    </Canvas>
  );
}
