import { Stars } from "@react-three/drei";
import { useContext } from "react";

import { setStarAmounts } from "../../../../utils/functions/time/set-star-amounts";
import { TimezoneContext } from "../../../../context/context";

import { SkyStarsProps } from "../background-stars";

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
