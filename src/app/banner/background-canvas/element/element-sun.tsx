import { useContext, useEffect, useRef } from "react";
import { Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Sky as SkyImpl } from "three-stdlib";
import * as THREE from "three";

import { TimezoneContext } from "../../context";
import { setSunPosition } from "../functions/time/set-sun-position";
import { setSunRayleigh } from "../functions/time/set-sun-rayleigh";
import { setSunTurbidity } from "../functions/time/set-sun-turbidity";
import { getCurrnetHourTimezone } from "../functions/time/get-current-timezon";

export default function SkySun() {
  /* sky */
  const skyRef = useRef<SkyImpl>(null);
  const timezone = useContext(TimezoneContext);
  const sunPositionsValue = setSunPosition(timezone);
  const rayleighValue = setSunRayleigh(timezone);
  const turbidityValue = setSunTurbidity(timezone);

  /* animation */
  function skyPropsChangeEffect() {
    if (!skyRef.current) return;

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const isOneHourBeforeTimezoneChange = [3, 7, 11, 15, 19, 23].includes(
      currentHour,
    );

    if (isOneHourBeforeTimezoneChange && currentMinutes !== 59) return;

    const nextTimezone = getCurrnetHourTimezone(currentHour + 1);
    const nextSunPositionsValue = setSunPosition(nextTimezone);
    const isSameSunPosition = sunPositionsValue.equals(nextSunPositionsValue);

    if (isSameSunPosition) return;

    const uniforms = skyRef.current.material.uniforms;
    uniforms.sunPosition.value.lerp(nextSunPositionsValue, 0.01);

    const nextRayleighValue = setSunRayleigh(timezone);
    uniforms.rayleigh.value = THREE.MathUtils.lerp(
      uniforms.rayleigh.value,
      nextRayleighValue,
      0.01,
    );
  }

  useEffect(() => {
    if (skyRef.current) {
      const uniforms = skyRef.current.material.uniforms;
      uniforms.sunPosition.value.copy(sunPositionsValue);
      uniforms.rayleigh.value = rayleighValue;
    }
  }, []);

  useFrame(skyPropsChangeEffect);

  return <Sky ref={skyRef} turbidity={turbidityValue} distance={5000} />;
}
