import { Stars } from "@react-three/drei";
import { useContext } from "react";

import { SkyStarsProps } from "../background-stars";
import { TimezoneContext } from "../../../../app/banner/context";
import { setStarAmounts } from "../../../../app/banner/background-canvas/functions/time/set-star-amounts";

export default function StarsComp({
  factorSize,
  scaleUpSpeed,
  starSphereRadius,
  count,
  isManualMode,
}: Omit<SkyStarsProps, "timezone">) {
  const timezone = useContext(TimezoneContext);
  const starAmounts = !isManualMode ? setStarAmounts(timezone) : count;

  return (
    <Stars
      count={starAmounts}
      factor={factorSize}
      speed={scaleUpSpeed}
      radius={starSphereRadius}
    />
  );
}
