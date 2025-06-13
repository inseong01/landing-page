import { useContext } from "react";
import { Stars } from "@react-three/drei";

import { TimezoneContext } from "../../context";
import { setStarAmounts } from "../functions/time/set-star-amounts";

export default function SkyStars() {
  const timezone = useContext(TimezoneContext);
  const count = setStarAmounts(timezone);

  const factorSize = 1;
  const scaleUpSpeed = 1;
  const starSphereRadius = 200;

  return (
    <Stars
      count={count}
      factor={factorSize}
      speed={scaleUpSpeed}
      radius={starSphereRadius}
    />
  );
}
